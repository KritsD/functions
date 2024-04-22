//Function to render your items
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

function handleButtonClick() {

	//if both list have selection
	if ( document.getElementById('data-list').value != 'Choose' && document.getElementById('data-list2').value != 'Choose' ) {
		document.getElementById("warning").style.display = 'none';
		openMenu(); 
	} else {
		document.getElementById("warning").style.display = 'block';
	}
}

function whenlistchange(){
	console.log("listchange")

	if ( document.getElementById('data-list').value == 'Choose' || document.getElementById('data-list2').value == 'Choose' ) {
		document.getElementById("warning").style.display = 'none';
		closeMenu(); 
	} else {
		document.getElementById("warning").style.display = 'none';
		outputSolution();
	}	
}

function outputSolution(){

    const results = document.getElementById('resultsDiv');
    const dataList = document.getElementById('data-list').value;
	const dataList2 = document.getElementById('data-list2').value;
    // var result = "<span class='p2'>Make a selection</span>";

    switch (dataList){
        case "A minute":
            switch (dataList2) {
                case "Headache":
					result = "<span class='p2'> Point your indoor light source, like a lamp, away from your eyes. To reduce screen glare, make sure the light source shines away from your computer screen. On digital screens, adjust the brightness to match the level of light around you. Also, adjust the screen's contrast, so your eyes don't have to strain to see.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span> <br> HEADACHE";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> A MINUTE";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br> USE PROPER LIGHTING";
					break;
				case "Sore eyes":
					// result = "<span class='p2'>Palming your eyes has two important effects: first, it requires that your eyes are closed for a while, which is good for eye strain on its own. Second, some studies suggest that it may help your eyes circulate blood and liquid better, helping your eyes recover from hard work more easily.</span>";
					result ="<span class='p2'>For 2 minutes, gently cup your palms and place them over your eyes. Make sure you can open and close your eyes freely. Staring and blinking into the darkness can help your vision reset.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span><br> SORE EYES";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> A MINUTE";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br>PALM THE EYES";
					break;  
				case "Blurred vision":
					result = "<span class='p2'>Practicing taking breaks by looking away from the screen can help reduce eye tension and pain.</span>";
					result += "<span class='p2'>Look at something at least 20 feet away for 20 seconds every 20 minutes.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span> <br> BLURED VISION";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> A MINUTE";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br> FOLLOW 20-20-20 RULE";
                    break;
				case "Shoulder/neck pain":
					result = "<span class='p2'>Drop your head gently to your chest. While breathing in, slowly roll your head up to your left shoulder. While breathing out, slowly roll your head back to center. Repeat to the right. Repeat 3 times on each side.</span>";
					result += "<span class='p2'>Head tilt: Sit up straight. Tuck in your chin. Slowly tip your head to the left. Return to the center. Then, tip your head to the right.Repeat 3 times on each side.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom: </span><br> SHOULDER/NECK PAIN";
					resultstimeHeader.innerHTML = "<span class='p3'>time: </span><br>A MINUTE";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br> NECK & SHOULDER ROLLS";
					break;  
				case "Eye Fatigue":
					// result ="<span class='p2'>Flexing is an eye exercise that stretches and strengthens the occular muscles in the eye. This involves rapid movements up and down, then left and right.</span>";
					result ="<span class='p2'>Face forward and look straight ahead. Look up without moving your head and then look down. Repeat this motion 10 times.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span><br>EYE FATIGUE";
					resultstimeHeader.innerHTML = "<span class='p3'>time: </span><br>A MINUTE";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br> FLEX THE EYES";
					break; 
            }
			break;

		case "Some time":
        	switch (dataList2){
                case "Headache":
                    result = "<span class='p2'>Close your eyes and take 15 long deep breaths</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span> <br> HEADACHE";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span> <br>SOME TIME";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span> <br>CLOSE EYES & BREATHE";
                    break;
                case "Sore eyes":
					// result ="<span class='p2'>The warmth from the compress helps trigger tears while relaxing muscles. This helps relieve eye strain without putting any additional stress on delicate muscles.</span>";
					result ="<span class='p2'>Take a washcloth soaked in warm water. Wash your hands before you start so bacteria doesn't get in your eyes. Dip your washcloth in water that you've boiled (to sterilize it) and cooled until lukewarm. Then put it on your eyes for 5-10 minutes, or as long as your doctor advises.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span><br> SORE EYES";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> SOME TIME";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy: </span><br>A WARM COMPRESS";
                    break;  
				case "Blurred vision":
					result = "<span class='p2'>After you've brewed chamomile or regular tea, put the bags in a clean container in the fridge. Once they've cooled, put them on your eyelids to help soothe your eyes and reduce swelling. Make sure you've washed your face and hands well and taken out your contacts. And don't get any tea in your eyes.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span> <br> BLURED VISION";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> SOME TIME";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br> COOLED CHAMOMILE BAGS";
					break;
				case "Shoulder/neck pain":
					result = "<span class='p2'>Make sure your screen is about arm's length (20-26 inches) away from your face. The center of the screen should be slightly below eye level (4-5 inches). It helps to have a chair you can move up and down Adjust the text size so you don't squint.</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span> <br> SHOULDER/NECK PAIN";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span> <br>SOME TIME";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br>ADJUST YOUR SCREEN";
					break;  
				case "Eye Fatigue":
					result = "<span class='p2'>Take a screen break, rest your eyes for several minutes</span>";
					resultsfeelingHeader.innerHTML = "<span class='p3'>symptom:</span><br>EYE FATIGUE";
					resultstimeHeader.innerHTML = "<span class='p3'>time:</span><br> SOME TIME";
					resultsremedyHeader.innerHTML = "<span class='p3'>remedy:</span><br>REST";
					break;   
            	}
				break;
    	}
    results.innerHTML = result;
}

function openMenu(){
		//open
		document.getElementById("gridwithbuttons").style.display = 'block';
		document.getElementById("grid").style.right = "0%"
}
function closeMenu(){
		//close
		document.getElementById("gridwithbuttons").style.display = 'none';
		document.getElementById("grid").style.right ="-100%"
}


// function openNav() {
// 	document.getElementById("myNav").style.width = "100%";
//   }
  
//   function closeNav() {
// 	document.getElementById("myNav").style.width = "0%";
//   }
	
// Fetch gets your (local) JSON file…
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})
	
document.getElementById("printbutton").onclick = () => {
	console.log('print click');
	window.print()
}



// OLD SHIZZZZZ//
// // Function to render your items
// const renderItems = (data) => {
// 	// The `ul` where the items will be inserted
// 	const dataList = document.getElementById('data-list');
// 	const dataList2 = document.getElementById('data-list2');

// 	// Loop through each item in the data array
// 	data.availableTime.forEach((item) => {
// 		let listItem =
// 			`
//                 <option value = "${item.value}">${item.text}</option>
// 			`
// 		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
// 	})

// 	// Loop through each item in the data array
// 	data.symptoms.forEach((item) => {
// 		// Make a “template literal” as we have before, inserting your data (and maybe the class)
// 		let listItem =
// 			`
//                 <option value = "${item.value}">${item.text}</option>
// 			`
// 		dataList2.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
// 	})
// }

// function handleButtonClick() {
//     // outputSolution(); // Call the first function
//     toggleMenu(); // Call the second function
// 	// openNav();
// }

// function whenlistchange(){
// 	console.log("listchange")

// 	const results = document.getElementById('resultsDiv');
	
// 	switch (dataList){
//         case "A minute":
//             switch (dataList2) {
//                 case "Headache":
//                     // results.classList.add("HeadacheClass");
// 					result = "<span class='p2'> Point your indoor light source, like a lamp, away from your eyes. To reduce screen glare, make sure the light source shines away from your computer screen. On digital screens, adjust the brightness to match the level of light around you. Also, adjust the screen's contrast, so your eyes don't have to strain to see.</span>";
// 					toggleTimerVisibility(10);
// 					resultsfeelingHeader.innerHTML = "symptom: headache";
// 					resultstimeHeader.innerHTML = "time: a minute";
// 					resultsremedyHeader.innerHTML = "remedy: use proper lighting.";
// 					break;
// 					// result = "Close eyes and breathe <img src='eye.png' alt='Sore Eyes Image'>";
// 					// result += "<p>Rest your eyes for 5 minutes and apply a warm compress.</p>";
// 				case "Sore eyes":
// 					result = "<span class='p2'>Palming your eyes has two important effects: first, it requires that your eyes are closed for a while, which is good for eye strain on its own. Second, some studies suggest that it may help your eyes circulate blood and liquid better, helping your eyes recover from hard work more easily.</span>";
// 					result +="<span class='p2'>For 2 minutes, gently cup your palms and place them over your eyes. Make sure you can open and close your eyes freely. Staring and blinking into the darkness can help your vision reset.</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: headache";
// 					resultstimeHeader.innerHTML = "time: a minute";
// 					resultsremedyHeader.innerHTML = "remedy: palm the eyes";
// 					toggleTimerVisibility(10);
// 					break;  
// 				case "Blurred vision":
// 					result = "<span class='p2'>Practicing taking breaks by looking away from the screen can help reduce eye tension and pain.</span>";
// 					result += "<span class='p2'>Look at something at least 20 feet away for 20 seconds every 20 minutes.</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: blurred vision";
// 					resultstimeHeader.innerHTML = "time: a minute";
// 					resultsremedyHeader.innerHTML = "remedy: follow the 20-20-20 rule";
// 					toggleTimerVisibility(20);
//                     break;
// 				case "Shoulder/neck pain":
// 					result = "<span class='p2'>Drop your head gently to your chest. While breathing in, slowly roll your head up to your left shoulder. While breathing out, slowly roll your head back to center. Repeat to the right. Repeat 3 times on each side.</span>";
// 					result += "<span class='p2'>Head tilt: Sit up straight. Tuck in your chin. Slowly tip your head to the left. Return to the center. Then, tip your head to the right.Repeat 3 times on each side.</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: shoulder/neck pain ";
// 					resultstimeHeader.innerHTML = "time: a minute";
// 					resultsremedyHeader.innerHTML = "remedy: neck and shoulder rolls";
// 					toggleTimerVisibility(40);
// 					break;  
// 				case "Eye Fatigue":
// 					result ="<span class='p2'>Flexing is an eye exercise that stretches and strengthens the occular muscles in the eye. This involves rapid movements up and down, then left and right.</span>";
// 					result +="<span class='p2'>Face forward and look straight ahead. Look up without moving your head and then look down. Repeat this motion 10 times.</span>";
// 					toggleTimerVisibility(20);
// 					resultsfeelingHeader.innerHTML = "symptom: eye fatigue";
// 					resultstimeHeader.innerHTML = "time: a minute";
// 					resultsremedyHeader.innerHTML = "remedy: flex the eyes";
// 					break; 
//             }
// 			break;

// 		case "Some time":
//         	switch (dataList2){
//                 case "Headache":
//                     result = "<span class='p2'>Close your eyes and take 15 long deep breaths</span>";
// 					toggleTimerVisibility(120);
// 					resultsfeelingHeader.innerHTML = "symptom: headache";
// 					resultstimeHeader.innerHTML = "time: some time";
// 					resultsremedyHeader.innerHTML = "remedy: close eyes and breathe";
//                     break;
//                 case "Sore eyes":
// 					result ="<span class='p2'>The warmth from the compress helps trigger tears while relaxing muscles. This helps relieve eye strain without putting any additional stress on delicate muscles.</span>";
// 					result +="<span class='p2'>Try a washcloth soaked in warm water.Wash your hands before you start so bacteria doesn't get in your eyes. Dip your washcloth in water that you've boiled (to sterilize it) and cooled until lukewarm. Then put it on your eyes for 5-10 minutes, or as long as your doctor advises.</span>";
// 					toggleTimerVisibility(600);
// 					resultsfeelingHeader.innerHTML = "symptom: sore eyes";
// 					resultstimeHeader.innerHTML = "time: some time";
// 					resultsremedyHeader.innerHTML = "remedy: a warm compress";
//                     break;  
// 				case "Blurred vision":
// 					result = "<span class='p2'>After you've brewed chamomile or regular tea, put the bags in a clean container in the fridge. Once they've cooled, put them on your eyelids to help soothe your eyes and reduce swelling. Make sure you've washed your face and hands well and taken out your contacts. And don't get any tea in your eyes.</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: blurred vision";
// 					resultstimeHeader.innerHTML = "time: some time";
// 					resultsremedyHeader.innerHTML = "remedy: try cooled chamomile tea bags";
// 					break;
// 				case "Shoulder/neck pain":
// 					result = "<span class='p2'>Make sure your screen is about arm's length (20-26 inches) away from your face. The center of the screen should be slightly below eye level (4-5 inches). It helps to have a chair you can move up and down Adjust the text size so you don't squint. And try a document holder next to your monitor for printed papers. This limits how much you move your eyes back and forth.</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: shoulder/neck pain";
// 					resultstimeHeader.innerHTML = "time: some time";
// 					resultsremedyHeader.innerHTML = "remedy: adjust your screen";
// 					break;  
// 				case "Eye Fatigue":
// 					result = "<span class='p2'>Take a screen break, rest your eyes for several minutes</span>";
// 					resultsfeelingHeader.innerHTML = "symptom: eye fatigue";
// 					resultstimeHeader.innerHTML = "time: some time";
// 					resultsremedyHeader.innerHTML = "remedy: rest";
// 					break;   
//             	}
// 				break;
//     	}
//     results.innerHTML = result;
// }

// function outputSolution(){

//     const results = document.getElementById('resultsDiv');
//     const dataList = document.getElementById('data-list').value;
// 	const dataList2 = document.getElementById('data-list2').value;
//     var result = "<span class='p2'>Make a selection</span>";
// 	toggleTimerVisibility(0);

//     // switch (dataList){
//     //     case "A minute":
//     //         switch (dataList2) {
//     //             case "Headache":
//     //                 // results.classList.add("HeadacheClass");
// 	// 				result = "<span class='p2'> Point your indoor light source, like a lamp, away from your eyes. To reduce screen glare, make sure the light source shines away from your computer screen. On digital screens, adjust the brightness to match the level of light around you. Also, adjust the screen's contrast, so your eyes don't have to strain to see.</span>";
// 	// 				toggleTimerVisibility(10);
// 	// 				resultsfeelingHeader.innerHTML = "symptom: headache";
// 	// 				resultstimeHeader.innerHTML = "time: a minute";
// 	// 				resultsremedyHeader.innerHTML = "remedy: use proper lighting.";
// 	// 				break;
// 	// 				// result = "Close eyes and breathe <img src='eye.png' alt='Sore Eyes Image'>";
// 	// 				// result += "<p>Rest your eyes for 5 minutes and apply a warm compress.</p>";
// 	// 			case "Sore eyes":
// 	// 				result = "<span class='p2'>Palming your eyes has two important effects: first, it requires that your eyes are closed for a while, which is good for eye strain on its own. Second, some studies suggest that it may help your eyes circulate blood and liquid better, helping your eyes recover from hard work more easily.</span>";
// 	// 				result +="<span class='p2'>For 2 minutes, gently cup your palms and place them over your eyes. Make sure you can open and close your eyes freely. Staring and blinking into the darkness can help your vision reset.</span>";
// 	// 				resultsfeelingHeader.innerHTML = "symptom: headache";
// 	// 				resultstimeHeader.innerHTML = "time: a minute";
// 	// 				resultsremedyHeader.innerHTML = "remedy: palm the eyes";
// 	// 				toggleTimerVisibility(10);
// 	// 				break;  
// 	// 			case "Blurred vision":
// 	// 				result = "<span class='p2'>Practicing taking breaks by looking away from the screen can help reduce eye tension and pain.</span>";
// 	// 				result += "<span class='p2'>Look at something at least 20 feet away for 20 seconds every 20 minutes.</span>";
// 	// 				resultsfeelingHeader.innerHTML = "symptom: blurred vision";
// 	// 				resultstimeHeader.innerHTML = "time: a minute";
// 	// 				resultsremedyHeader.innerHTML = "remedy: follow the 20-20-20 rule";
// 	// 				toggleTimerVisibility(20);
//     //                 break;
// 	// 			case "Shoulder/neck pain":
// 	// 				result = "<span class='p2'>Drop your head gently to your chest. While breathing in, slowly roll your head up to your left shoulder. While breathing out, slowly roll your head back to center. Repeat to the right. Repeat 3 times on each side.</span>";
// 	// 				result += "<span class='p2'>Head tilt: Sit up straight. Tuck in your chin. Slowly tip your head to the left. Return to the center. Then, tip your head to the right.Repeat 3 times on each side.</span>";
// 	// 				resultsfeelingHeader.innerHTML = "symptom: shoulder/neck pain ";
// 	// 				resultstimeHeader.innerHTML = "time: a minute";
// 	// 				resultsremedyHeader.innerHTML = "remedy: neck and shoulder rolls";
// 	// 				toggleTimerVisibility(40);
// 	// 				break;  
// 	// 			case "Eye Fatigue":
// 	// 				result ="<span class='p2'>Flexing is an eye exercise that stretches and strengthens the occular muscles in the eye. This involves rapid movements up and down, then left and right.</span>";
// 	// 				result +="<span class='p2'>Face forward and look straight ahead. Look up without moving your head and then look down. Repeat this motion 10 times.</span>";
// 	// 				toggleTimerVisibility(20);
// 	// 				resultsfeelingHeader.innerHTML = "symptom: eye fatigue";
// 	// 				resultstimeHeader.innerHTML = "time: a minute";
// 	// 				resultsremedyHeader.innerHTML = "remedy: flex the eyes";
// 	// 				break; 
//     //         }
// 	// 		break;

// 	// 	case "Some time":
//     //     	switch (dataList2){
//     //             case "Headache":
//     //                 result = "<span class='p2'>Close your eyes and take 15 long deep breaths</span>";
// 	// 				toggleTimerVisibility(120);
// 	// 				resultsfeelingHeader.innerHTML = "symptom: headache";
// 	// 				resultstimeHeader.innerHTML = "time: some time";
// 	// 				resultsremedyHeader.innerHTML = "remedy: close eyes and breathe";
//     //                 break;
//     //             case "Sore eyes":
// 	// 				result ="<span class='p2'>The warmth from the compress helps trigger tears while relaxing muscles. This helps relieve eye strain without putting any additional stress on delicate muscles.</span>";
// 	// 				result +="<span class='p2'>Try a washcloth soaked in warm water.Wash your hands before you start so bacteria doesn't get in your eyes. Dip your washcloth in water that you've boiled (to sterilize it) and cooled until lukewarm. Then put it on your eyes for 5-10 minutes, or as long as your doctor advises.</span>";
// 	// 				toggleTimerVisibility(600);
// 	// 				resultsfeelingHeader.innerHTML = "symptom: sore eyes";
// 	// 				resultstimeHeader.innerHTML = "time: some time";
// 	// 				resultsremedyHeader.innerHTML = "remedy: a warm compress";
//     //                 break;  
// 	// 			case "Blurred vision":
// 	// 				result = "<span class='p2'>After you've brewed chamomile or regular tea, put the bags in a clean container in the fridge. Once they've cooled, put them on your eyelids to help soothe your eyes and reduce swelling. Make sure you've washed your face and hands well and taken out your contacts. And don't get any tea in your eyes.</span>";
// 	// 				toggleTimerVisibility(600);
// 	// 				resultsfeelingHeader.innerHTML = "symptom: blurred vision";
// 	// 				resultstimeHeader.innerHTML = "time: some time";
// 	// 				resultsremedyHeader.innerHTML = "remedy: try cooled chamomile tea bags";
// 	// 				break;
// 	// 			case "Shoulder/neck pain":
// 	// 				result = "<span class='p2'>Make sure your screen is about arm's length (20-26 inches) away from your face. The center of the screen should be slightly below eye level (4-5 inches). It helps to have a chair you can move up and down Adjust the text size so you don't squint. And try a document holder next to your monitor for printed papers. This limits how much you move your eyes back and forth.</span>";
// 	// 				resultsfeelingHeader.innerHTML = "symptom: shoulder/neck pain";
// 	// 				resultstimeHeader.innerHTML = "time: some time";
// 	// 				resultsremedyHeader.innerHTML = "remedy: adjust your screen";
// 	// 				break;  
// 	// 			case "Eye Fatigue":
// 	// 				result = "<span class='p2'>Take a screen break, rest your eyes for several minutes</span>";
// 	// 				resultsfeelingHeader.innerHTML = "symptom: eye fatigue";
// 	// 				resultstimeHeader.innerHTML = "time: some time";
// 	// 				resultsremedyHeader.innerHTML = "remedy: rest";
// 	// 				break;   
//     //         	}
// 	// 			break;
//     // 	}
//     // results.innerHTML = result;
// }

// function toggleMenu(){

// 	if(document.getElementById("grid").style.right == "0%")
//    {document.getElementById("grid").style.right ="-100%"
//   }
//    else{
//    document.getElementById("grid").style.right = "0%"
//   }
// }

// // function openNav() {
// // 	document.getElementById("myNav").style.width = "100%";
// //   }
  
// //   function closeNav() {
// // 	document.getElementById("myNav").style.width = "0%";
// //   }
	
// // Fetch gets your (local) JSON file…
// fetch('data.json')
// 	.then(response => response.json())
// 	.then(data => {
// 		// And passes the data to the function, above!
// 		renderItems(data)
// 	})

// //**** Timer related functions */	

// let timerInterval;
// let timerRunning = false;
// let totalSeconds = 20; // Set the countdown time here
// let secondsRemaining = totalSeconds;

// function startStopTimer() {
//   if (timerRunning) {
//     clearInterval(timerInterval);
//     timerRunning = false;
//     document.getElementById("startStopButton").textContent = "Start";
//   } else {
//     timerInterval = setInterval(updateTimer, 1000);
//     timerRunning = true;
//     document.getElementById("startStopButton").textContent = "Stop";
//   }
// }

// function updateTimer() {
//   if (secondsRemaining > 0) {
//     secondsRemaining--;
//     const formattedTime = formatTime(secondsRemaining);
//     document.getElementById("timer").textContent = formattedTime + "s";
//   } else {
//     clearInterval(timerInterval);
//     timerRunning = false;
//     document.getElementById("startStopButton").textContent = "Start";
//     //alert("Time's up!");
//   }
// }

// function formatTime(seconds) {
//   var formattedSeconds = padZero(seconds % 60);
//   formattedSeconds = Number(formattedSeconds);
//   return `${formattedSeconds}`;
// }

// function padZero(number) {
//   return number < 10 ? "0" + number : number;
// }

// document.getElementById("startStopButton").addEventListener("click", startStopTimer);

// function toggleTimerVisibility(countdownLength) {
// 	const timerContainer = document.querySelector('.timer-container');
// 	if (countdownLength != 0)  {
// 	  timerContainer.style.display = 'block';
// 	  // Set countdown timer length
// 	  totalSeconds = countdownLength;
// 	  secondsRemaining = totalSeconds;
// 	  // Update timer display
// 	  const formattedTime = formatTime(secondsRemaining);
// 	  document.getElementById("timer").textContent = formattedTime + "s";
// 	} else {
// 	  timerContainer.style.display = 'none';
// 	}
//   }

//   document.getElementById("printbutton").addEventListener("click", function() {
// 	window.print(); // Trigger printing
//   });
  
//   // Example usage:
//   // Call this function whenever you want to toggle the visibility of the timer container.
//   // You can specify the countdown length in seconds.
//   toggleTimerVisibility(60); // This sets the countdown timer to 60 seconds
  
// // END TIMER FUNCTIONS