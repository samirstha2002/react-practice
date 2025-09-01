import logo from './logo.svg';
import './App.css';
const names="samir";
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
let count=0;
function App() {

  const onincrementclick=()=>{
    count= count+1;
    console.log({count})

  }
  const onsearchchange=(event)=>{
      console.log(event.target.value);
  }

  return (
    <>
    <h1> Jsx</h1>
    <button id='btn' onClick={onincrementclick}>Increment</button>
    <input onChange={onsearchchange} placeholder='search.........'/>

    </>
    
      // <div className="App">
      // {/* <h1>Hello My name is {names}</h1>
      // {/* {element} */}
      // {/* <MyButton /> */}
      // {/* <Buttons /> */}
      // {/* <div>
      //   <Search />
      // </div> */} 
      // <Header />
    // </div>
   
    
  );
}

export default App;
