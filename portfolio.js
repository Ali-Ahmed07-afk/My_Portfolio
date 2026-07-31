const greeting = document.querySelector("#greeting") 
const hours = new Date().getHours()
if(hours < 12){
    greeting.innerHTML  = "Good Morning"
}
else if(hours < 18){
    greeting.innerHTML  = "Good Afternoon"
}
else{
    greeting.innerHTML  = "Good Evening"
}

setInterval(function updateclock(){
   const currenttime = new Date().toLocaleString();
   document.querySelector('#clock').innerHTML = currenttime
}, 1000)

document.querySelector('#theme-btn').addEventListener('click', (e) => {
    document.body.classList.toggle('light-theme')
})