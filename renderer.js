// renderer.js

//const { contextBridge, ipcRenderer } = require('electron/renderer')
document.getElementById('btnExit').addEventListener('click',async () => {
  await window.utoAPI.exitProgram()
})


document.getElementById('btnChangeTitle').addEventListener('click', ()=>{
  const title = document.getElementById('edtTitle').value
  window.utoAPI.setTitle(title)
  //console.log("renderer.. called.")// console.log()사용 못함.
})

/*
// close app
function closeApp(e) {
    console.log('caloseApp() called.');
    e.preventDefault();
    ipcRenderer.send('close');
}

document.getElementById("closeBtn").addEventListener("click", closeApp);
*/

// const wireUpButtons = () => {
//     console.log('caloseApp() called.');

//   let closeButton = document.getElementById('closeBtn');

//   closeButton.addEventListener('click', function() {
//     ipcRenderer.send('close');
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('addEventListener() called.');
//     wireUpButtons();
// });

