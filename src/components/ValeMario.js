import React, { useRef } from "react";
import "../App.css";
import logo from "../assets/GroupPic.JPG";
import { scrollToElementId } from "../util/constants";
import "./ValeMario.css";
import grouppic from "./../assets/GroupPic.JPG";

function ValeMario() {
  const dialogRef = useRef(null);

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    dialogRef.current.showModal();
  }

  function handleDialogClose() {
    dialogRef.current.close();
  }

  return (

    <div className="vm-container">

          <div className="grupfoto2">
            <img src={grouppic} alt="Logo" />
          </div>

        <div className="title-container-vm">
            
            <h1>Mario & Valerio</h1>
            <p>Sommelier & Barkeeper</p>

            

            <h4>MEHR ERFAHREN</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#ffffff"
            >
              <path d="M12 17.27L18.18 9 20 10.73 12 20 4 10.73 5.82 9z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>               
                       
        </div>

        <div className="grupfoto">
        <img src={grouppic} alt="Logo" />
        </div>
        

    </div>



  );
}

export default ValeMario;
