let watched = document.getElementById("myinfo_watchedeps").value

console.log("MAIN IS ON!!")

browser.runtime.onMessage.addListener((message) => {
	console.log("message::", message)
	return Promise.resolve(watched)
	/*
	if (message == "GetWatched") {
		return Promise.resolve(watched)
	}
	*/
})