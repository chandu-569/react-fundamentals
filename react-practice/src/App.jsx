// import Profile from "./profile";
// import ProductCard from "./ProductCard";
import { useState } from "react"
import "./App.css"
// import UserAvatar from "./UserAvatar";
// import Greeting from "./Greeting"
// import BlogPost from "./BlogPost"


function App() {
  // let c1="class"
  // let name="chandu"
  // let age="20"
  // const isStudent=true;
  // let productname = "cars"
  // const prize = 10000000
  // const isavailable=true
  // const products = [
  //   {
  //     productname: "product1",
  //     prize: "6000",
  //     isavailable: true
  //   },
  //   {
  //     productname: "product2",
  //     prize: "3000",
  //     isavailable: true
  //   },
  //   {
  //     productname: "product3",
  //     prize: "2000",
  //     isavailable: true
  //   }
  // ]

  //   const posts = [
  //   {
  //     id:1,
  //     author: "chandu",
  //     title: "king kohli",
  //     description: "biography"
  //   },
  //   {
  //     id:2,
  //     author: "kalion",
  //     title: "lion",
  //     description: "lion king"
  //   },
  //   {
  //     id:3,
  //     author: "lucky",
  //     title: "pawan",
  //     description: "kapu"
  //   }
  // ]
  // const name="lion"
  // const click=(name)=>
  // {
  //   alert("hello "+ name)
  //   // alert("button clicked")
  //   console.log("bro chaduvuko")
  // }

  // const handlechange=(event)=>
  // {
    
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  // }

  // const submit=(event)=>
  // {
  //   event.preventDefault();
  //   alert("submitted")
  // }
//  const [count,setcount]=useState(0)
// const [email,setemail]=useState("")
// const [password,setpassword]=useState("")
//   const increment=()=>
//   {
//       setcount((increase)=>increase+1)
//       console.log(count)
//   }

//   const handleEmail=(event)=>
//   {
//     setemail(event.target.value)
//   }
//   const handlePassword=(event)=>
//   {
//     setpassword(event.target.value)
//   }

  const [formData,setformData]=useState({
    name:"",
    email:"",
    password:""})

   const submit=(event)=>
  {
    event.preventDefault();
      console.log(event.target.name)
    console.log(event.target.value)
    alert(`${name}Email: ${formData.email}\n password: ${formData.password} \n ypu are logged in`)
  }

  const handlechange=(event)=>
  {
    
      setformData(
    {
      ...formData,
      [event.target.name]:event.target.value
    }
  )
  }

  //  const increment=(count)=>
  // {
  //     setcount(count+1)
  //     console.log(count)
  // }

  return (
    <div>
    {/*  <div className="display"> */}
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
      {/* <Greeting productnames={productname} prizes={prize} /> */}
      {/* {
        products.map((product)=>(
      <ProductCard productnames={productname} prizes={prize} isavailable={isavailable} />
        ))
      } */}

      {/* {
        posts.map((post)=>
        (
          <BlogPost
          key={post.id}
          author={post.author}
          title={post.title}
          description={post.description}
          />
        ))
      } */}
      <p>hello</p>
      <form onSubmit={submit}>
      <input type="text" placeholder="enter your name" name="myname" onChange={handlechange}/>
      <br />
      <input type="text" placeholder="enter your email" name="email" onChange={handlechange}/>
      <br />
      <input type="password" placeholder="enter your password" name="password" onChange={handlechange}/>
      <br />
      {/* <br />
      <input type="text" placeholder="enter your email" name="email" onChange={handleEmail}/>
      <br />
      <input type="password" placeholder="enter your password" name="password" onChange={handlePassword}/>
      <br /> */}
      <button type="submit">login bro</button>
      </form>
      {/* <br />
      <button onClick={()=>click("lion")}>click me</button>

      <p>{count}</p>
      <button onClick={increment}>INCREMENT</button> */}

    </div>

  )
}

export default App
