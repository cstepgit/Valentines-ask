// Get the "no" button element
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const title = document.getElementById("title");
let titles = ["Would you want to try again?","Are you sure?", "Let's try again"]
let yesClicks = 1;
let noClicks = 1;
let yesTitle = "Yay! I love you so much!";
let valentineTitle = "Will you be my valentine?";




// Add an event listener for the "click" event
noButton.addEventListener("click", function() {
    if(noClicks == 1){
       title.innerHTML = titles[noClicks];
   
    }
    else if (noClicks == 2 && yesClicks == 2){
    title.innerHTML = titles[noClicks];
    }
    else if (noClicks == 2 && yesClicks == 1){
        title.innerHTML = "Will you be my valentine?"
        yesClicks = 1;
        noClicks = 1;
    }
    else if(noClicks == 2 && yesClicks >= 2){
        title.innerHTML = titles[2];
    }
    if(noClicks == 3 && yesClicks >= 2){
        noClicks = 1;
        yesClicks++; 
        title.innerHTML = titles[noClicks];
        
    }
    noClicks++;
    console.log("No Clicks: " + noClicks);
    console.log("Yes CLicks: " + yesClicks);
});

yesButton.addEventListener("click", function() {
   
   if(noClicks == 2 && yesClicks == 1){
        title.innerHTML = "Would you want to try again?"
        yesClicks++;
    }
    else if (yesClicks == 2 && noClicks == 2){
        title.innerHTML = valentineTitle;
        yesClicks = 1;
        noClicks = 1;
    }
    else if(yesClicks ==1 && noClicks == 1){
        title.innerHTML = yesTitle;
    }
    else if(noClicks == 2 && yesClicks > 2){
        title.innerHTML = titles[noClicks];
     
    }
    console.log("No Clicks: " + noClicks);
    console.log("Yes CLicks: " + yesClicks);
});




