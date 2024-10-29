import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//console.log(user);


function App() {
  const { name, color,city,bio,about } = user
  const github  = user.links.github 
  console.log(color + city + name + github)
  return (
    
    <div>
      <NavBar />
      <Home name={name} color={color} city={city}/>
      <About bio={bio} about ={about}/>
    </div>
  );
}

export default App;
