import React from "react";
import { useNavigate} from "react-router-dom";

function MenuItem({ image, name, url }) {
  let Navigate = useNavigate();
  function handleClick() {
    if (name === "Corporate Event"){
      Navigate('/corporate-event');
    }
    else if(name === "Social Event"){
      Navigate('/social-event');
    }
    else if(name === "Festive Event"){
      Navigate('/festive-event');
    }
    else if(name === "Community Event"){
      Navigate('/community-event');
    }
    else if(name === "Wedding Event"){
      Navigate('/wedding-event');
    }
    else if(name === "Party Event"){
      Navigate('/party-event');
    }
  }
  return (
    <div className="menuItem" to='/'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <button onClick={handleClick}>Know more..</button>
      
    </div>
  );
}

export default MenuItem;
