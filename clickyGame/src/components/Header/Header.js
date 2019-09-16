import React from "react";
import "./Header.css";
const Header = props => (
 <div className="header">
   <div className="title">{props.children}</div>
   <div className = "directions">*Challenge Mode: Don't click the same image twice.</div>
   <div className="scores">
     Score: {props.score} Highscore: {props.highscore}
   </div>
 </div>
);
export default Header;