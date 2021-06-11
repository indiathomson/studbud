const search = document.getElementById("dictionarySearch");


fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=mask", {
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

    document.getElementById('dictionaryMeaning').innerHTML = response.entry + response.meaning;
    document.getElementById('dictionaryMeaning').innetHTML = response.meaning;
   ;


})
.catch(err => {
	console.error(err);
});


search.addEventListener("click", function(event){
  event.preventDefault();
  let word_ID = wordInput.value;

  console.log(word_ID)
});

// search.addEventListener("click", function(event){

// });