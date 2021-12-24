import './App.css';
import FormComponent from './Components/FormComponent';

function App() {
  return (
    <div className="App">
      < FormComponent />
    </div>
  );
}

export default App;

// import React,{useState} from 'react'

// import FormData from './FormData'

// const FormComponent = () => {
//   const [name, setName] = useState("")
//   const [department, setDept] = useState("")
//   const [rating, setRating] = useState("")
//   function displayData(){
//     const nameInput= document.getElementById("name")
//     const deptInput= document.getElementById("department")
//     const ratingInput= document.getElementById("rating")
//     setName(nameInput.value)
//     setDept(deptInput.value)
//     setRating(ratingInput.value)
//   }
  
//   return (
//     <div>
//       <h1>EMPLOYEE FEEDBACK FORM</h1>
//       <div>
//         <label htmlFor="name">Name :</label>
//         <input type="text" id="name" name="name" /><br/>
//         <label htmlFor="department">Department :</label>
//         <input type="text" id="department" name="department" /><br/>
//         <label htmlFor="rating">Rating :</label>
//         <input type="number" id="rating" name="rating" /><br/> <br />
//         <button onClick={displayData} >Submit</button>
//       </div>
//       < FormData name={name} department={department} rating={rating} />
//     </div>
//   )
// }

// export default FormComponent
