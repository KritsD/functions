// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list');
	const dataList2 = document.getElementById('data-list2');

	// Loop through each item in the data array
	data.availableTime.forEach((item) => {
		let listItem =
			`
                <option value = "${item.value}">${item.text}</option>
			`
		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})

	// Loop through each item in the data array
	data.symptoms.forEach((item) => {
		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		let listItem =
			`
                <option value = "${item.value}">${item.text}</option>
			`
		dataList2.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})
}

function outputSolution(){

    const results = document.getElementById('resultsDiv');
    const dataList = document.getElementById('data-list').value;
	const dataList2 = document.getElementById('data-list2').value;
    var result = "Make a selection";
	toggleTimerVisibility(0);

    switch (dataList){
        case "A minute":
            switch (dataList2) {
                case "Headache":
                    results.classList.add("HeadacheClass");
                    result = "Blink slowly";
					result += "Blinking several times can help spread the tears across your eyes, reducing burning or sore feelings.";
					result +="Blink slowly: Looking straight ahead, close your eyes for half a second, then reopen them. Repeat this 20 times in a row to refresh your eyes and reduce dryness.";
					toggleTimerVisibility(10);
					resultsHeader.innerHTML = "Headache + A Minute";
					break;
					// result = "Close eyes and breathe <img src='eye.png' alt='Sore Eyes Image'>";
					// result += "<p>Rest your eyes for 5 minutes and apply a warm compress.</p>";
				case "Sore eyes":
					result = "Palming the eyes";
					result += "Palming your eyes has two important effects: first, it requires that your eyes are closed for a while, which is good for eye strain on its own. Second, some studies suggest that it may help your eyes circulate blood and liquid better, helping your eyes recover from hard work more easily.";
					result +="For 2 minutes, gently cup your palms and place them over your eyes. Make sure you can open and close your eyes freely. Staring and blinking into the darkness can help your vision reset.";
					resultsHeader.innerHTML = "Sore Eyes + A Minute";
					toggleTimerVisibility(10);
					break;  
				case "Blurred vision":
                    result = "Follow the 20-20-20 rule";
					result += "Practicing taking breaks by looking away from the screen can help reduce eye tension and pain.";
					result += "Look at something at least 20 feet away for 20 seconds every 20 minutes.";
					resultsHeader.innerHTML = "BLurred Vision + A Minute";
					toggleTimerVisibility(20);
                    break;
				case "Shoulder/neck pain":
					result = "Neck and shoulder rolls";
					result += "Neck and shoulder rolls"
					result += "Warm-up:Drop your head gently to your chest. While breathing in, slowly roll your head up to your left shoulder. While breathing out, slowly roll your head back to center. Repeat to the right. Repeat 3 times on each side.";
					result += "Head tilt: Sit up straight. Tuck in your chin. Slowly tip your head to the left. Return to the center. Then, tip your head to the right.Repeat 3 times on each side.";
					result += "Head turn: Sit up straight. Slowly turn your head and look over your left shoulder. Hold for a few seconds. Go back to the center, then repeat to your right.Repeat 3 times on each side.";
					toggleTimerVisibility(40);
					resultsHeader.innerHTML = "Shoulder/neck pain + A Minute";
					break;  
				case "Eye Fatigue":
					result = "Flexing the eyes!";
					result +="Flexing is an eye exercise that stretches and strengthens the occular muscles in the eye. This involves rapid movements up and down, then left and right.";
					result +="Face forward and look straight ahead. Look up without moving your head and then look down. Repeat this motion 10 times";
					toggleTimerVisibility(20);
					resultsHeader.innerHTML = "Eye Fatigue + A Minute";
					break; 
            }
			break;

		case "Some time":
        	switch (dataList2){
                case "Headache":
                    results.classList.add("SometimeClass");
                    result = "Close your eyes and take 15 long deep breaths";
					toggleTimerVisibility(120);
					resultsHeader.innerHTML = "Headache + Sometime";
                    break;
                case "Sore eyes":
                    result = "A warm compress";
					result ="The warmth from the compress helps trigger tears while relaxing muscles. This helps relieve eye strain without putting any additional stress on delicate muscles.";
					result +="Try a washcloth soaked in warm water.Wash your hands before you start so bacteria doesn't get in your eyes. Dip your washcloth in water that you've boiled (to sterilize it) and cooled until lukewarm. Then put it on your eyes for 5-10 minutes, or as long as your doctor advises.";
					toggleTimerVisibility(600);
					resultsHeader.innerHTML = "Sore eyes + Sometime";
                    break;  
				case "Blurred vision":
					result = "Try cooled chamomile tea bags";
					result += "After you've brewed chamomile or regular tea, put the bags in a clean container in the fridge. Once they've cooled, put them on your eyelids to help soothe your eyes and reduce swelling. Make sure you've washed your face and hands well and taken out your contacts. And don't get any tea in your eyes.";
					toggleTimerVisibility(600);
					resultsHeader.innerHTML = "Blurred vision + Sometime";
					break;
				case "Shoulder/neck pain":
					result = "Adjust your screen: Make sure your screen is about arm's length (20-26 inches) away from your face. The center of the screen should be slightly below eye level (4-5 inches). It helps to have a chair you can move up and down Adjust the text size so you don't squint. And try a document holder next to your monitor for printed papers. This limits how much you move your eyes back and forth.";
					resultsHeader.innerHTML = "Shoulder/neck pain + Sometime";
					break;  
				case "Fatigue":
					result = "Take a screen break, rest your eyes for several minutes";
					resultsHeader.innerHTML = "Fatigue + Sometime";
					break;   
            	}
				break;
    	}
    results.innerHTML = result;
}
	
// Fetch gets your (local) JSON file…
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})


//**** Timer related functions */	

let timerInterval;
let timerRunning = false;
let totalSeconds = 20; // Set the countdown time here
let secondsRemaining = totalSeconds;

function startStopTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("startStopButton").textContent = "Start";
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
    document.getElementById("startStopButton").textContent = "Stop";
  }
}

function updateTimer() {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    const formattedTime = formatTime(secondsRemaining);
    document.getElementById("timer").textContent = formattedTime + "s";
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("startStopButton").textContent = "Start";
    //alert("Time's up!");
  }
}

function formatTime(seconds) {
  var formattedSeconds = padZero(seconds % 60);
  formattedSeconds = Number(formattedSeconds);
  return `${formattedSeconds}`;
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

document.getElementById("startStopButton").addEventListener("click", startStopTimer);

function toggleTimerVisibility(countdownLength) {
	const timerContainer = document.querySelector('.timer-container');
	if (countdownLength != 0)  {
	  timerContainer.style.display = 'block';
	  // Set countdown timer length
	  totalSeconds = countdownLength;
	  secondsRemaining = totalSeconds;
	  // Update timer display
	  const formattedTime = formatTime(secondsRemaining);
	  document.getElementById("timer").textContent = formattedTime + "s";
	} else {
	  timerContainer.style.display = 'none';
	}
  }
  
  // Example usage:
  // Call this function whenever you want to toggle the visibility of the timer container.
  // You can specify the countdown length in seconds.
  toggleTimerVisibility(60); // This sets the countdown timer to 60 seconds
  
// END TIMER FUNCTIONS
