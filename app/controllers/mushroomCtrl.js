"use strict";

app.controller("mushroomCtrl", function($scope, mushroomFactory){
	mushroomFactory.getMushrooms()
	.then(function(itemObject){
		var mushroomHolder = [];
		for (var key in itemObject){
			mushroomHolder.push(itemObject[key]);
		}
		console.log("mushrooms", mushroomHolder);
		$scope.mushrooms = mushroomHolder;
	});
});