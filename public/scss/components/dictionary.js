const search = document.getElementById("dictionarySearch");
let word_ID;


search.addEventListener("click", function(event){
  event.preventDefault();
  let word_ID = wordInput.value;

  console.log(word_ID)
});


var url = "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=dog"

var entryWord = 'word_ID';

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cb42d64a92msh6631f571552d438p100823jsn3179a3fd267d",
		"x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com"
  
	}
})
.then(response => response.json() )
.then(response => {
  console.log(response.entry);
  console.log(response.meaning)
  // console.log(response.meaning)

    document.getElementById('dictionaryWord').innerHTML = response.entry;

    document.getElementById('dictionaryMeaning').innerHTML = response.meaning;


})
.catch(err => {
	console.error(err);
});

search.addEventListener("click", fetch);