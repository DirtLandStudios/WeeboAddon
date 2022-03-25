console.log("HELLO")
var watched = document.getElementById("myinfo_watchedeps").value

/* browser.runtime.onMessage.addListener((message) => {
	console.log(message, watched)
	if (message == "GetWatched") {
		browser.runtime.sendMessage(watched)
		console.log(watched)
	}
})
 */
//browser.runtime.sendMessage(watched)
var database = {
	"40834": {
		"2": {
			"link name episode 2": "link episode 2"
		},
		"link name": "link"
	}
}
browser.storage.local.set({CurrentEps: watched})
console.log(watched)
browser.storage.local.set({Database: database})
console.log("HELLO")