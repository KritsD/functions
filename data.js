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
					result = "Blink Try Slowly for 10 seconds";
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
                    result = "Close eyes and take 5 long deep breaths";
                    break;
                case "Sore eyes":
                    result = "Blink slowly for 10 seconds";
                    break;  
				case "Blurred vision":
					result = "Use eye drops or rest your eyes for a few minutes under cucumber slices, cooled chamomile tea bags, or even cold spoons.";
					break;
				case "Shoulder/neck pain":
					result = "3 Neck and shoulder rolls in clockwise and anti-clockwise direction";
					break;  
				case "Fatigue":
					result = "Rest, get off screen now!";
					break;   
            	}
    	}
    results.innerHTML = result;
}

window.onload=function(){
	var list = document.getElementById("shuffleAndSort"),
	button = document.getElementById("shuffle");
	function shuffle(items)
	{
		var cached = items.slice(0), temp, i = cached.length, rand;
		while(--i)
		{
			rand = Math.floor(i * Math.random());
			temp = cached[rand];
			cached[rand] = cached[i];
			cached[i] = temp;
		}
		return cached;
	}
	function shuffleNodes()
	{
		var nodes = list.children, i = 0;
		nodes = Array.prototype.slice.call(nodes);
		nodes = shuffle(nodes);
		while(i < nodes.length)
		{
			list.appendChild(nodes[i]);
			++i;
		}
	} 
	document.getElementById("shuffle").onclick = shuffleNodes;
	
	} 


// Fetch gets your (local) JSON file…
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})




