const icon=document.querySelector(".icon-share");
  const triangle=document.querySelector(".triangle");
  const popup=document.querySelector(".share-popup");
  
 
  icon.addEventListener('click', () => {
  popup.classList.toggle("sr-only");
  triangle.classList.toggle("sr-only");
});

  