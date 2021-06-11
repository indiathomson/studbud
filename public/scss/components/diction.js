const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://dictionary29.p.rapidapi.com/dictionary.php");
xhr.setRequestHeader("dictionary", "dictionary");
xhr.setRequestHeader("x-rapidapi-key", "cb42d64a92msh6631f571552d438p100823jsn3179a3fd267d");
xhr.setRequestHeader("x-rapidapi-host", "dictionary29.p.rapidapi.com");

xhr.send(data);