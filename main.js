let watched = document.getElementById("myinfo_watchedeps").value

browser.runtime.onMessage.addListener((message) => {
	console.log(message, watched)
	return Promise.resolve(watched)
	/*
	if (message == "GetWatched") {
		return Promise.resolve(watched)
	}
	*/
})