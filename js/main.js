(() => {
	//make an AJAX request using the Fetch API
	fetch('./data/classData.json')
		.then(res => res.json())
		.then(classdata => {//you can change the word data to whatever
			console.log(classdata);

		//handleData
		//here's why you would call the function that puts the pieces on the page
		let dataSection = document.querySelector(".class-section"),
		classTemplate = document.querySelector("#class-template").content;
	
		// debugger;

		function handleDataSet (data) {
			// debugger;
	
	
				// debugger;
				let currentdata = classTemplate.cloneNode(true),
				currentClassText = currentdata.querySelector('.class').children;
	
				currentClassText[0].textContent = data.coursename;
				currentClassText[1].textContent = data.coursecode;
				currentClassText[2].textContent = data.profname;
				currentClassText[3].textContent = data.classtime;
				currentClassText[4].textContent = data.coursedesc;
				currentClassText[5].textContent = data.coursecontent;
	
				dataSection.appendChild(currentdata);
		}
	
		handleDataSet (classdata);
	})
	.catch((err) => {
		console.log(err);
		fetch('./data/FailData.json')
		.then(res => res.json())
		.then(faildata => {//you can change the word data to whatever
			console.log(faildata);

		//handleData
		//here's why you would call the function that puts the pieces on the page
		let dataSection = document.querySelector(".class-section"),
		classTemplate = document.querySelector("#class-template").content;
	
		// debugger;

		function handleDataSet (data) {
			// debugger;
	
	
				// debugger;
				let currentdata = classTemplate.cloneNode(true),
				currentClassText = currentdata.querySelector('.class').children;
	
				currentClassText[0].textContent = data.failed;
	
				dataSection.appendChild(currentdata);
		}
	
		handleDataSet (faildata);
	})
	})




})();