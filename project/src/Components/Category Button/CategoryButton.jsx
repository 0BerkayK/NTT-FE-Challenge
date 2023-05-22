import React from "react";
import "./CategoryButton.css";

export default function CategoryButton() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div class="dropdown">
      <button onClick={myFunction} class="dropbtn">
        Categories
      </button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Data</a>
        <a href="#about">Company Name</a>
        <a href="#contact">Company Name</a>
        <a href="#contact">Company Name</a>
        <a href="#contact">Company Name</a>
      </div>
    </div>
  );
}
