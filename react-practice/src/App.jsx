import Profile from "./profile";
import ProductCard from "./ProductCard";
function App() {

let c1="class"
let name="chandu"
let age="20"
const isStudent=true;
let productname="cars"
const prize=10000000
const isavailable=true

  return (
    
    <div>
      <Profile />
      <ProductCard/> 
      <p>hello react</p>
      <p>first {c1}</p>
    <p> my name is {name}</p>
    <p>age:{age}</p>
    {isStudent===true?"student":"not student"}
    <br />
    <br />
    <br />
    <ProductCard productname={productname} prize={prize} isavailable={isavailable}/>
    </div>

  )
}

export default App
