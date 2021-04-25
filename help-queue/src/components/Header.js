import React from "react";
import ticketsImage from "./../img/Ticket_MONSTER.png";



function Header(){
  const headerStyles = {
    

}
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="Ticket MONSTER" />
    </React.Fragment>
  );
}

export default Header;