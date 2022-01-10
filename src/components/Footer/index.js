import React from "react";


  
function Footer(props) {
    console.log(props);
    return (
      <footer>
        <p>Copyright {props.year}</p>
      </footer>
    );
  }

  export default Footer;