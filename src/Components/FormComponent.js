import React,{useState,useEffect} from 'react'

const FormComponent = () => {
  //Useeffect is clearing the local storage on page refresh
  useEffect(()=>{localStorage.clear()},[])
  const [data, setData] = useState({name:"",department:"",rating:"",})
  const[arrofobj,setArrofobj] =useState([])

  const [counter,setCounter] = useState(0);
  // handleChange is handling changes of the input fields
  const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
  }
  //displayData
  const displayData = (e) =>{
    e.preventDefault();
    setCounter(counter+1)

    const arr={...data,id:counter}
    setArrofobj([...arrofobj,arr])
    setData({name:"",department:"",rating:"",})
    console.log(arrofobj);
    
  }
  
  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form action='' onSubmit={displayData}>
        <label >Name :</label>
        <input type="text" id="name" name="name" value={data.name}  onChange={handleChange} /><br/>
        <label >Department :</label>
        <input type="text" id="department" name="department" value={data.department} onChange={handleChange} /><br/>
        <label >Rating :</label>
        <input type="number" id="rating" name="rating" value={data.rating} onChange={handleChange} /><br/> <br />
        <button type="submit">Submit</button>
      </form>
      <div className='dataArea'>
        {arrofobj.map((item)=>{
            return <div className='card'>Name : {item.name} | Department : {item.department} Rating : {item.rating}</div>
        })}
      </div>
      
    </div>
  )
}

export default FormComponent
