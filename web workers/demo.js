var demo = function() {
	let arr = []
	for(i=0; i<2000000; i++){
		arr.push(i);
	}
	postMessage(arr);
}
demo();
