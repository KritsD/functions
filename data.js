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
		//let conditionalClass = '' // Set an empty class variable

		//if (!item.alsoWasWriter) { // Conditional if this is `false` (“not true”)
		//	conditionalClass = 'faded' // Update the variable
		//}

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

    switch (dataList)
    {
        case "A minute":
            switch (dataList2)
            {
                case "Headache":
                    results.classList.add("HeadacheClass");
                    result = "Close eyes and breathe";
                    break;
                case "Sore eyes":
                    result = "Try these exercises";
                    break;  
				case "Blurred vision":
                    result = "Follow the 20-20-20";
                    break;
				case "Shoulder/neck pain":
					result = "Neck and shoulder rolls";
					break;  
				case "Fatigue":
					result = "Get off screen and rest your eyes!";
					break; 
            }
        case "I have some time":
            switch (dataList2)
            {
                case "Headache":
                    results.classList.add("SometimeClass");
                    result = "Close eyes and breathe";
                    break;
                case "Sore eyes":
                    result = "Blink Slowly";
                    break;  
				case "Blurred vision":
					result = "Use eye drops";
					break;
				case "Shoulder/neck pain":
					result = "Neck and shoulder rolls";
					break;  
				case "Fatigue":
					result = "Get off screen and rest your eyes!";
					break;   
            }
        
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




