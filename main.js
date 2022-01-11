let watched = document.getElementById("myinfo_watchedeps").value

browser.runtime.onMessage.addListener((message) => {
	console.log(message, watched)
	if (message == "GetWatched") {
		browser.runtime.sendMessage(watched)
		return Promise.resolve(watched)
	}
})