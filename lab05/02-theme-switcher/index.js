/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultSwitch = () => {
   document.querySelector("body").className = "container";
};

const oceanSwitch = () => {
   document.querySelector("body").className = "container desert";
};

const highContrastSwitch = () => {
   document.querySelector("body").className = "container ocean";
};

const desertSwitch = () => {
   document.querySelector("body").className = "container high-contrast";
};

document.querySelector("#default").addEventListener('click', defaultSwitch);
document.querySelector("#ocean").addEventListener('click', oceanSwitch);
document.querySelector("#high-contrast").addEventListener('click', highContrastSwitch);
document.querySelector("#desert").addEventListener('click', desertSwitch);
