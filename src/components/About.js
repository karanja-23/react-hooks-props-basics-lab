import React from "react";
import user from "../data/user";
import Links from "./Links";
function About(props) {
  const github  = user.links.github 
  const linkedin = user.links.linkedin
  
  return (
    <div id="about">
      <h2>{props.about}</h2>
      {props.bio && props.bio !== "" ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {github} linkedin={linkedin}/> 
    </div>
  );
}

export default About;
