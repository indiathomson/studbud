



// import json;

// import requests;

const app_id = "<382d5343>";
const app_key  = "<3e790c953ea5dc53c42f63ca039721e2>";
const endpoint = "entries";
const language_code = "en-gb";
const word_id = "defenition";

url = "https://od-api.oxforddictionaries.com/api/v2/" + endpoint + "/" + language_code + "/" + word_id.toLowerCase();

define = fetch.GET(url, headers = {"app_id": '382d5343', "app_key": '3e790c953ea5dc53c42f63ca039721e2'});

console.log(define);




print("code {}\n".format(r.status_code));
print("text \n" + r.text);
print("json \n" + json.dumps(r.json()));