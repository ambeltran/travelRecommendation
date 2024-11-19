const travelDestinations = './travel_recommendation_api.json'

fetch(travelDestinations)
	.then(response => {
		return response.json(); //return data as JSON file
	})
	.then(data => {
		console.log('Data from the API', data);
	})
	.catch(error => {
		console.error('An error occured:', error);	
	});