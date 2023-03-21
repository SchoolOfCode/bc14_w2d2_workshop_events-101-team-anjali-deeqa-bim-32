const button = document.querySelector("#click-me");

function handleClick(event) {
  let shiftKey = event.shiftKey
  // If clicked, console log you clicked me!
  console.log('You clicked me!')
  console.log(event);
// 👉 Add code so that if the `shiftKey` property of the event is `true` 
// (in other words, if the user holds the shift key down while they click the button), 
//then change the text in the button to be `"NAILED IT!!"`.

//if shift key is true
// change text to nailed it

if (shiftKey) {
  console.log("Shift Pressed", event);
}//have that button when clicked, change text to nailed it. 
  return (button.textContent = "NAILED IT!")

  
  // If shift key pressed, change the inner text of the button to be NAILED IT
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
