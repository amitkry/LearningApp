const lightIcon= document.getElementById('light_mode');
const darkIcon = document.getElementById('dark_mode');
const body = document.body;

//Enable Dark Mode
lightIcon.addEventListener("click", ()=>{
    body.setAttribute("data-bs-theme", "dark");
    lightIcon.classList.add("d-none");
    darkIcon.classList.remove("d-none");
})

//Enable Light Mode
darkIcon.addEventListener("click", ()=>{
    body.setAttribute("data-bs-theme", "light");
    darkIcon.classList.add("d-none");
    lightIcon.classList.remove("d-none");
})