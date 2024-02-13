// Get the "no" button element
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const title = document.getElementById("title");
let titles = ["Would you want to try again?", "Are you sure?", "Let's try again"]
let yesClicks = 1;
let noClicks = 1;
let yesTitle = "Yay! I love you so much!";
let valentineTitle = "Will you be my valentine?";




// Add an event listener for the "click" event
noButton.addEventListener("click", function () {
    if (noClicks == 1) {
        title.innerHTML = titles[noClicks];
        noClicks++;

    }
    else if(noClicks == 2) {
        title.innerHTML = valentineTitle;
        noClicks = 1;
    }

});

yesButton.addEventListener("click", function () {

    if (noClicks == 2) {
        let dotsCount = 0;
        let message = "Let's try again";
        for (let i = 0; i < 3; i++) {
            setTimeout(function () {
                if (dotsCount < 3) {
                    message += ".";
                    title.innerHTML = message;
                    dotsCount++;
                }
            }, i * 700);
        }
        setTimeout(function () {
            title.innerHTML = valentineTitle;
            noClicks = 1;
        }, 3 * 700);
    }
    else if (noClicks == 1) {
        noButton.setAttribute("disabled", "");
    yesButton.setAttribute("disabled", "");
        title.innerHTML = yesTitle;
    }

});




