//shows links accosiated with current animeID

//first extract MAL animeID from url. I am making an array with all the pathnames
//eg https://myanimelist.net/anime/16498/Shingeki_no_Kyojin => anime/16498/Shingeki_no_Kyojin
//anime/16498/Shingeki_no_Kyojin => {anime, 16498, Shingeki_no_Kyojin}. animeID is the number

var animeID = new URL(document.location /* THIS WON T WORK HERE!!*/).pathname.split("/")[1];
var database = browser.storage.local.get("JsonUrl");
//find the link to the anime in the database
var links = database[animeID]

//I hate JS soooooo much, I have no idea wtf this will do, all i know is that it won't do what I want it to.
function CreateLink(_link) {
	var Hlink = document.createElement("Hlink")
	Hlink.textContent = _link
	Hlink.href = _link.value
	document.body.appendChild(Hlink)
}
//look at all the links under the animeID, and create a button for each
if (Array.isArray(links)) {
	links.forEach(CreateLink)
}

