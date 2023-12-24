import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDog } from "../Redux/actions";

import style from "./FormPage.module.css";


const validate = (form) => {
    let errors = {}
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (form.name && !/^[a-zA-Z\s]*$/.test(form.name)) {
      errors.name = "Name must contain only letters";
    }
    if (!form.height) {
      errors.height = "Height is required, separate min and max with a dash (-)";
    }
    if (!/^[0-9\s]*[-][0-9\s]*$/.test(form.height)) {
      errors.height = "Height must contain only numbers separated by a dash (-)";
    }
    
    if (!form.weight) {
      errors.weight = "Weight is required, separate min and max with a dash (-)";
    }
    if (!/^[0-9\s]*[-][0-9\s]*$/.test(form.weight)) {
      errors.weight = "Weight must contain only numbers separated by a dash (-)";
    }
    if(!form.life_span) {
        errors.life_span = "Lifespan must contain only numbers separated by a dash (-)"
    }
    if (!/^[0-9\s]*[-][0-9\s]*$/.test(form.life_span)) {
      errors.life_span = "Weight must contain only numbers separated by a dash (-)";
    }
    return errors
}

const FormPage = () => {
    
    const dispatch = useDispatch();
    

    const [button, setButton] = useState(true);
    const [errors, setErrors] = useState({
        name: "",
        height:"",
        weight:"",
        life_span:  "",
        image: "",
    });

    const [form, setForm] = useState({
        name: "",
        height: "",
        weight: "",
        life_span:  "",
        image: "",
        
    })

    

    // useEffect(()=>{
    //     if (form.name.length === 0 || form.height.length === 0 || form.weight.length === 0) setButton(false)
    //     if (form.name.length > 0 && form.height.length > 0  && form.weight.length > 0) setButton(true)
        
        
    // }, [form, setButton]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (Object.keys(errors).length === 0 && Object.values(form).every(value => value)) {
          dispatch(postDog(form));
          alert("The new dog was added successfully");
          setForm({
              name: "",
              height: "",
              weight: "",
              life_span: "",
              image: "",
          });
      } else {
          alert("Please fill out all fields correctly before submitting");
      }
  }
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value //el valor del atributo modificado del estado en el form se actualizara con lo escrito en dicho campo
        });
        setErrors(validate({
            ...form,
            [e.target.name] : e.target.value
        }))
    }
    
    

    

    return(
        <div className={style.container}>
        
            
            <form className={style.formContainer} action="" id="form" onSubmit={handleSubmit} >
                    <h1 className={style.title}>Create new dog</h1>
                    <div >
                        <input className={style.formInput} type="text" value={form.name} name="name" onChange={(e) => handleChange(e)} placeholder="Name..."/>
                    </div>
                    <div >{errors.name && <p>{errors.name}</p>}</div> {/*mesaje ed error de nombre*/}

                    <div >
                        <div>
                            <input className={style.formInput} type="text" value={form.height} name="height" placeholder="Min-Max height..." onChange={(e) => handleChange(e)}/>
                        </div>
                      
                    </div>
                    <div >{errors.height && <p>{errors.height}</p>}</div> 
                    {/* espacio para agregar error */}{/* espacio para agregar error */}

                    <div >
                        <div>
                            <input className={style.formInput} type="text" value={form.weight} name="weight" placeholder="Min-Max weight..." onChange={(e) => handleChange(e)}/>
                        </div>
                        <div >{errors.weight && <p>{errors.weight}</p>}</div>{/* espacio para agregar error */}
                    </div>
                    

                    <div >
                        <input className={style.formInput} type="text" autoComplete="off" name="life_span" value={form.life_span} placeholder="Lifespan exam: 10 - 12" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div >{errors.life_span && <p>{errors.life_span}</p>}</div>{/* espacio para agregar error */}

                    <div >
                        <input className={style.formInput} type="text" autoComplete="off" value={form.image} name="image" placeholder="Copy image URL here" onChange={(e) => handleChange(e)}/>
                    </div>

                   

                    <div >
                        <button className={style.formSubmit} type="submit" form="form">Create Dog</button>
                    </div>
          </form>

            
        </div>
        
    )
}

export default FormPage;