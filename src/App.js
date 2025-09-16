import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// const names="samir";

// const element =<h2> I love Coding </h2>
// function MyButton(){
//   return(
//     <>
//      <p> i am samir shrestha</p>
//      <button>Submit button</button>
//     </>
    
//   )
// }

// const Buttons=()=> <button>submit button</button>
// const Search=()=> <input placeholder='Search the product' />

// const Header=()=>{
//   return(
//     <div style={{backgroundColor:'green', display:'flex'}}>
//       <h1 className='h1'> Shopify app</h1>
//      <input placeholder="Search the product"/>
//      <ul style={{display:'flex'}}>
//       <li>Home</li>
//       <li> About us</li>
//       <li> Products</li>
//      </ul>
//     </div>
    
//   )
// }
// const AddButton=(props)=>{
  
//   const onIncrementClick=()=>{
//     props.setCount(props.count + 1);
//   }
//   return (
//     <button onClick={onIncrementClick}>Increment</button>
//   )
// }
// const DecrementButton=(props)=>{
  
//   const onDecrementClick=()=>{
//   props.setCount(props.count - 1);
//   }
    

//   return(
//     <button onClick={onDecrementClick}> Decrement</button>
//   )
// }

function App() {
  // const[count, setCount]=useState(10);
   const initial={
    name:'',
    email:'',
    address:'',
    password:'',
    phone:''
   }
    const [form, setForm]= useState(initial);

    const onNameChange=(event)=>{
      setForm({...form , name: event.target.value});
    }
  
    const onEmailChange=(event)=>{
      setForm({...form , email: event.target.value});
    }

    console.log(form);
  return (
    <>
     <div>
      <label>Name</label>
     <input onChange={onNameChange} placeholder='Please Enter Your Name'/>
     </div>

     <div>
      <label>Email</label>
     <input onChange={onEmailChange} placeholder='Please Enter Your email'/>
     </div>


     <div>
      <label>Address</label>
     <input  placeholder='Please Enter Your address'/>
     </div>


     <div>
      <label>Password</label>
     <input  placeholder='Please Enter Your password'/>
     </div>


     <div>
      <label>Phone</label>
     <input  placeholder='Please Enter Your Phone number'/>
     </div>
      {/* // <AddButton count={count} setCount={setCount} />
      // <span> the value is {count}</span>
      // <DecrementButton count={count} setCount={setCount}/> */}

    </>
   
    
  );
}

export default App;
