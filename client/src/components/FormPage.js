import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 

import { postDog, getTemperaments } from "../Redux/actions";

import style from "./FormPage.module.css";

const validate = (form) => {
  let errors = {};
  if (!form.name) {
    errors.name = "Name is required";
  }
  if (form.name && !/^[a-zA-Z\s]*$/.test(form.name)) {
    errors.name = "Name must contain only letters";
  }
  if (!form.height_min) {
    errors.height_min = "Min-Height is required";
  }
  if (!/^[0-9\s]*$/.test(form.height_min)) {
    errors.height_min = "Min-Height must contain only numbers";
  }
  if (!form.height_max) {
    errors.height_max = "Min-Height is required";
  }
  if (!/^[0-9\s]*$/.test(form.height_max)) {
    errors.height_max = "Min-Height must contain only numbers";
  }
  if (!form.weight_min) {
    errors.weight_min = "Min-Weight is required";
  }
  if (!/^[0-9\s]*$/.test(form.weight_min)) {
    errors.weight_min = "Min-Weight must contain only numbers";
  }
  if (!form.weight_max) {
    errors.weight_max = "Max-Weight is required";
  }
  if (!/^[0-9\s]*$/.test(form.weight_max)) {
    errors.weight_max = "Max-Weight must contain only numbers";
  }
  if (!form.life_span) {
    errors.life_span = "Lifespan is required";
  }
  if (!/^[0-9\s]*[-][0-9\s]*$/.test(form.life_span)) {
    errors.life_span = "Weight must contain only numbers separated by a dash (-)";
  }
  if (!form.image) {
    errors.image = "Image is required";
  }
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
    errors.image = "Image must be a valid URL";
  }
  if (!/^.{0,255}$/.test(form.image)) {
    errors.image = "Image must be less than 255 characters";
  }
  if (!form.temperamentList ) {
    errors.temperamentList = "Temperament is required";
  }
  if (!form.temperamentList.includes(",")) {
    errors.temperamentList = "Temperament list must be separated by commas";
  }
  
  return errors;
};

const FormPage = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.temperaments);
  const temperaments2 = [...temperaments];
  
  
  const [errors, setErrors] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperamentList: "",
  });

  const [form, setForm] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperamentList: "",
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalForm = {
      ...form,
      temperamentList: form.temperamentList.split(',').map(temp => temp.trim()),
    };
    if (Object.keys(errors).length === 0 && Object.values(finalForm).every((value) => value)) {
      dispatch(postDog(finalForm));
      alert("The new dog was added successfully");
      setForm({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        image: "",
        temperamentList: [],
      });
    } else {
      alert("Please fill out all fields correctly before submitting");
    }
  };

  const handleChange = (e) => {
    
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...form,
          [e.target.name]: e.target.value,
        })
      );
    
  };

  const handleTemperamentValidation = () => {
    const inputTemperaments = form.temperamentList.split(',').map(temp => temp.trim().toLowerCase());
    const validTemperaments = temperaments2.map(temp => temp.toLowerCase());
    const invalidTemperaments = inputTemperaments.filter(temp => !validTemperaments.includes(temp));
  
    if (invalidTemperaments.length > 0) {
      window.alert(`The following temperaments are not valid: ${invalidTemperaments.join(", ")}`)
      
    } else {
      // setErrors({
      //   ...errors,
      //   temperamentList: "",
      // });
      window.alert("All temperaments are valid");
    }
    
  };
  
  

  return (
    <div className={style.container}>
      <form className={style.formContainer} action="" id="form" onSubmit={handleSubmit}>
        <h1 className={style.title}>Create new dog</h1>
        <p>IMPORTANT the reference units used to complete the form are kg and cm</p>
        <div>
          <input
            className={style.formInput}
            type="text"
            value={form.name}
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Name..."
          />
        </div>
        <div>{errors.name && <p>{errors.name}</p>}</div>

        <div style={{display:"flex"}}>
        <input className={style.formInput}   type="text" value={form.temperamentList} name="temperamentList"  placeholder="Temperaments  Exam:Loyal,playfull" onChange={(e) => handleChange(e)}/>
        <button type="button" onClick={handleTemperamentValidation}>Validate Temperaments</button>
        </div>
        <div>{errors.temperamentList && <p>{errors.temperamentList}</p>}</div>

        <div>
          <div>
            <input
              className={style.formInput}
              type="text"
              value={form.height_min}
              name="height_min"
              placeholder="Min-Height..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div>{errors.height_min && <p>{errors.height_min}</p>}</div>

        <div>
          <div>
            <input
              className={style.formInput}
              type="text"
              value={form.height_max}
              name="height_max"
              placeholder="Max-Height..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div>{errors.height_max && <p>{errors.height_max}</p>}</div>

        <div>
          <div>
            <input
              className={style.formInput}
              type="text"
              value={form.weight_min}
              name="weight_min"
              placeholder="Min-Weight..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>{errors.weight_min && <p>{errors.weight_min}</p>}</div>
        </div>

        <div>
          <div>
            <input
              className={style.formInput}
              type="text"
              value={form.weight_max}
              name="weight_max"
              placeholder="Max-weight..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>{errors.weight_max && <p>{errors.weight_max}</p>}</div>
        </div>

        <div>
          <input
            className={style.formInput}
            type="text"
            autoComplete="off"
            name="life_span"
            value={form.life_span}
            placeholder="Lifespan exam: 10 - 12"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>{errors.life_span && <p>{errors.life_span}</p>}</div>

        <div>
          <input
            className={style.formInput}
            type="text"
            autoComplete="off"
            value={form.image}
            name="image"
            placeholder="Copy image URL here"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>{errors.image && <p>{errors.image}</p>}</div>

        <div>
          <button className={style.formSubmit} type="submit" form="form" >
            Create Dog
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;