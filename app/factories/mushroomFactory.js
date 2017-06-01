"use strict";

app.factory("mushroomFactory", function ($q, $http){

	let getMushrooms = () => {
		return $q((resolve, reject) => {
			$http.get('https://mushrooms-46470.firebaseio.com/.json')
			.then((itemObject) => {
				console.log("itemObject",itemObject.data.mushrooms);
				resolve(itemObject.data.mushrooms);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getMushrooms};
});