
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navItems = document.querySelectorAll("li");
const links = document.querySelectorAll(".links a");


const changeLiveitems = () =>{
  navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('live');

  })
}
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () =>{
    changeLiveitems();
    link.classList.add('live');

  })
})
















footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});





// 







