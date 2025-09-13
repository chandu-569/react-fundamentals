// import Profile from "./profile";
// import ProductCard from "./ProductCard";
// import "./App.css"
// import UserAvatar from "./UserAvatar";
import Greeting from "./Greeting"


function App() {
  // let c1="class"
  // let name="chandu"
  // let age="20"
  // const isStudent=true;
  let productname="cars"
  const prize=10000000
  // const isavailable=true

  return (

    <div className="display">
      {/* <Profile />
      <p>hello react</p>
      <p>first {c1}</p>
    <p> my name is {name}</p>
    <p>age:{age}</p>
    {isStudent===true?"student":"not student"}
    <br />
    <br />
    <br />
    <ProductCard productnames={productname} prizes={prize} isavailable={isavailable}/>
    <ProductCard productnames={productname} prizes={prize} isavailable={false}/>

    <UserAvatar/> */}
    <Greeting productnames={productname} prizes={prize} />

    </div>

  )
}

export default App
