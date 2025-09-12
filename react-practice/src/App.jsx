
function App() {

let c1="class"
let name="chandu"
let age="20"
const isStudent=true;
  return (
    
    <div>
      <p>hello react</p>
      <p>first {c1}</p>
    <p> my name is {name}</p>
    <p>age:{age}</p>
    {isStudent===true?"student":"not student"}
    </div>

  )
}

export default App
