//https://github.com/mdn/webextensions-examples
document.querySelector("#JsonUrl").value = browser.storage.local.get("JsonUrl");
function saveOptions(s) {
	browser.storage.local.set({
		JsonUrl: document.querySelector("#JsonUrl").value
	});
	s.preventDefault();
  }
  /*
  function restoreOptions() {
	var storageItem = browser.storage.managed.get('colour');
	storageItem.then((res) => {
	  document.querySelector("#managed-colour").innerText = res.colour;
	});
  
	var gettingItem = browser.storage.sync.get('colour');
	gettingItem.then((res) => {
	  document.querySelector("#colour").value = res.colour || 'Firefox red';
	});
  }

document.addEventListener('DOMContentLoaded', restoreOptions);
  */
document.querySelector("form").addEventListener("submit", saveOptions);
//DON'T FORGET!!! might want to change from local to sync later