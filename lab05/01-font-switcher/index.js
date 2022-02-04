let currFontSize = 20.0;

const makeBigger = () => {
   currFontSize += .2;
   document.querySelector("h1").style.fontSize = currFontSize.toString() + 'px';
   document.querySelector(".content").style.fontSize = currFontSize.toString() + 'px';
};

const makeSmaller = () => {
   currFontSize -= .2;
   document.querySelector("h1").style.fontSize = currFontSize.toString() + 'px';
   document.querySelector(".content").style.fontSize = currFontSize.toString() + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);


