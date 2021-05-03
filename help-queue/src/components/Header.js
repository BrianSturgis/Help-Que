import React from "react";
import ticketsImage from "./../img/Ticket_MONSTER.png";



function Header(){
  return (
    <React.Fragment>
      <br></br>
      <img src={ticketsImage} alt="Ticket MONSTER" />
    </React.Fragment>
  );
}

export default Header;