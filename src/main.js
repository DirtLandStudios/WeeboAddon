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
var animeID = new URL(browser.tabs.getCurrent().url).pathname.split("/")[2]
animeID.then(() => {
	
	browser.storage.local.set({"AnimeID": animeID})
	browser.storage.local.set({"CurrentEps": watched})
})


browser.storage.local.set({"Database": JSON.stringify(database)})
/*var db = browser.storage.local.get("Database")
console.log("HELLO")
console.log(db)
*/
/* browser.storage.onChanged.addListener((changes) => {
	console.log(changes)
}) */
var AnimeID = browser.storage.local.get("AnimeID").then(() => {console.log("HEEEELO" + AnimeID)})