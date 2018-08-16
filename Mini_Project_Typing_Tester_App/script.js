var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");
var greetSection = document.querySelector('.cong-section');

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var currentTime = '';
var interval = 0;
var timerRunning = false;

// Add leading zero to numbers 9 or below:
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}


// Run a standard minute/second/hundredths timer:
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutes = leadingZero(minutes);
    seconds = leadingZero(seconds);
    milliSeconds = leadingZero(milliSeconds);

    currentTime = minutes + ':' + seconds + ":" + milliSeconds;

    theTimer.textContent = currentTime;
    timer++;
}


// Match the text entered with the provided text on the page:
function spellCheck() {
    var textEntered = textArea.value;
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === ''){
        textAreaBorder.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            // green
            textAreaBorder.style.borderColor = 'forestgreen';
            // to stop timer
            clearInterval(interval);
            // Greetings Msg
            greetSection.style.display = 'block';
        }
        else{
            if(textEntered === partialText){
                // blue
                textAreaBorder.style.borderColor = 'lightblue';
            }
            else{
                // red
                textAreaBorder.style.borderColor = 'orangered';
            }
        }
    }

}



// Start the timer:
function start() {
    var textEnteredLength = textArea.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
}


// Reset everything:
function reset() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    currentTime = '';
    interval = 0;
    timerRunning = false;
    theTimer.textContent = "00:00:00";
    textAreaBorder.style.borderColor = 'gray';
    textArea.value = '';
    greetSection.style.display = 'none';
}

// Event listeners for keyboard input and the reset button:
textArea.addEventListener('keypress',start);
textArea.addEventListener('keyup',spellCheck);
resetButton.addEventListener('click',reset);