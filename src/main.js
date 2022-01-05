//first extract MAL animeID from url. I am making an array with all the pathnames
//eg https://myanimelist.net/anime/16498/Shingeki_no_Kyojin => anime/16498/Shingeki_no_Kyojin
//anime/16498/Shingeki_no_Kyojin => {anime, 16498, Shingeki_no_Kyojin}. animeID is the number
var animeID = new URL(document.location).pathname.split("/")[1];
var database = browser.storage.local.get("JsonUrl");
//find the link to the anime in the database
var link = database[animeID]