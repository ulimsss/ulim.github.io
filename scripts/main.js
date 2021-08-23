let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/mainimage.jpg'){
    myImage.setAttribute('src','images/firefox2.jpg');
  }else{
    myImage.setAttribute('src','images/mainimage.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enter your name.');
  if (!myName || myName===null){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.textContent='Mozila is cool, '+myName; 
    
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storeName=localStorage.getItem('name');
  myHeading.textContent='Mozila is cool, '+storeName;
}

myButton.onclick = function(){
  setUserName();
}