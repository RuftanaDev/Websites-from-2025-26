// reset curiosity state every refresh
sessionStorage.removeItem("clickCount");

let clicks = false;
const body = document.getElementById("body")
const locked = document.getElementById("locked");
// const curiosity = document.getElementById("curiostykillsmanypeople");
const content = document.getElementById("birthdayContent");


// date check
// const today = new Date();
// const month = today.getMonth() + 1;
// const day = today.getDate();

// if(month === 3 && day === 19 && s hours >= 0 && hours < 24){
//     locked.style.display = "none";
//     curiosity.classList.add("hidden");
//     content.classList.remove("hidden");
// }


// curiosity click system

body.addEventListener("click", () => {

    clickCount = true

    if(clickCount ){

     locked.style.display = "none";
        // curiosity.classList.remove("hidden");
        
     content.classList.remove("hidden");

    }

});

