/*document.getElementById("Dash").onclick=function(){
    window.location.href="./Dash.html";
}
document.getElementById("users").onclick=function(){
    window.location.href="./users.html";
}
document.getElementById("brands").onclick=function(){
    window.location.href="./brands.html";
}
document.getElementById("cat").onclick=function(){
    window.location.href="./cat.html";
}
document.getElementById("stores").onclick=function(){
    window.location.href="./stores.html";
}*/


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.items')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
}

let sidebar = document.querySelector("#class");

document.getElementById("profile").onclick =function(){
  console.log("hello");
  sidebar.classList.add('active');
}

document.getElementById("clspbtn").onclick = function(){
  sidebar.classList.remove('active');
}


document.getElementById("brands").onclick = function(){
  window.location.href="./brands.html";
  console.log("hi");
}

document.getElementById("lgt").onclick=function(){
  window.location.href="./loggingout.php";
}

document.getElementById("employees").onclick = function(){
  window.location.href="./empprofiles.php";

}