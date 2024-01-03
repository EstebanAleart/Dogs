import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { orderDogsByName, searchDogsByName , orderDogsByWeight,getTemperaments,filterDogsByTemperament, filterDogsByOrigin} from "../../Redux/actions";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  
  
  const dispatch=useDispatch()
  const location=useLocation()
  
  const[aux,setAux]=useState(false)
  const [input, setInput] = useState({
    name: "",
  });

  useEffect(() => {
    dispatch(getTemperaments());
}, [dispatch]);


  const temp = useSelector((state) => state.temperaments);
  const temp2 = [...temp];
 
  


  const handleOrderN= (event)=>{
        event.preventDefault()
        if(event.target.value==="Ascending"){
            dispatch(orderDogsByName(event.target.value))
            setAux(true)
        }
        if(event.target.value==="Descending"){
            dispatch(orderDogsByName(event.target.value))
            setAux(true)
        }
        if(event.target.value==="....."){
            dispatch(orderDogsByName(event.target.value))
            setAux(false)
        }
    }

  const handleOrderW= (event)=>{
        event.preventDefault()
        if(event.target.value==="AscendingWeight"){
            dispatch(orderDogsByWeight(event.target.value))
            setAux(true)
        }
        if(event.target.value==="DescendingWeight"){
            dispatch(orderDogsByWeight(event.target.value))
            setAux(true)
        }
        if(event.target.value==="All"){
            dispatch(orderDogsByWeight(event.target.value))
            setAux(false)
        }
    };

  const onSearch = (dogName) => {
   
    dispatch(searchDogsByName(dogName));
  };

  const handleSearch = (event) => { 
    
      event.preventDefault();
      onSearch(input.name); 
      document.getElementById("inputSearch").value=""
  }

  const handleChange = (event) => {
    setInput({
      name: event.target.value,
    });
    
  };  

  // const optionTemp=[]

  // {for(let i=0;i<temp2.length;i++){
  //   optionTemp.push(<option key={i} value={temp2[i].name}>{temp2[i].name}</option>)
  // }}

  const handleOrderT= (event)=>{
    event.preventDefault()
    if(event.target.value==="All"){
      dispatch(filterDogsByTemperament(event.target.value))
      setAux(false)
    }
    else{
      dispatch(filterDogsByTemperament(event.target.value))
      setAux(true)
    }
  }
  const handleOrderC= (event)=>{ 
    event.preventDefault()
    
    if(event.target.value==="yes"){
      dispatch(filterDogsByOrigin(event.target.value))
      setAux(true)
    }
    if(event.target.value==="no"){
      dispatch(filterDogsByOrigin(event.target.value))
      setAux(true)
    }
    if(event.target.value==="All"){
      dispatch(filterDogsByOrigin(event.target.value))
      setAux(false)
    }
  }

  const handleHome=()=>{
    onSearch(input.name= " ")
};



  return (
    <nav className={style.container}>
      <div>
        <Link to="/home">
        <button className={style.button} onClick={handleHome} >Home</button>
        </Link>
       
        <Link to="/create">
            <button className={style.button}>Create</button>
        </Link>

        <Link to="/about">
            <button className={style.button}>About</button>
        </Link>

        <Link to="/">
            <button className={style.button}>Logout</button>
        </Link>
       
      </div>
      
      {location.pathname === "/home" && (
        <>
      <div className={style.selectContainer}> 
            <p>Weight</p>                 
            <select className={style.input} onChange={handleOrderW}>
                <option value="All">.....</option>
                <option value="AscendingWeight">Ascending</option>
                <option value="DescendingWeight">Descending</option>
            </select>
            <p>Name</p>
            <select className={style.input} onChange={handleOrderN}>
                <option value=".....">.....</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            <p>Temperament</p>
            <select className={style.input} onChange={handleOrderT}>
                <option value="All">.....</option>
                {temp2.map((temp, index) => (
                <option key={index} value={temp}>{temp}</option>
                ))}
            </select>
            <p>Created</p>
            <select className={style.input} onChange={handleOrderC}>
                <option value="All">.....</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>    
      </div>
      <div>
        <input id="inputSearch" className={style.input} onChange={handleChange}  type="text" placeholder="Search" />
        <button className={style.button} onClick={handleSearch}>Search</button>
      </div>
      </>)}
    </nav>
  );        
};

export default Navbar;
