//shows links accosiated with current animeID

//first extract MAL animeID from url. I am making an array with all the pathnames
//eg https://myanimelist.net/anime/16498/Shingeki_no_Kyojin => anime/16498/Shingeki_no_Kyojin
//anime/16498/Shingeki_no_Kyojin => {anime, 16498, Shingeki_no_Kyojin}. animeID is the number

var animeID = new URL(document.location /* THIS WON T WORK HERE!!*/).pathname.split("/")[1];
var database = browser.storage.local.get("JsonUrl");
//find the link to the anime in the database
var links = database[animeID]

//look at all the links under the animeID, and create a button for each
/*
{links} should be an something like this:
"link name": "link", "link name 2": "link 2", ......
*/
for (let i in links) {
	var Hlink = document.createElement("Hlink")
	Hlink.textContent = i
	Hlink.href = links[i]
	document.body.appendChild(Hlink)
}
