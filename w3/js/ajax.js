function jsAjax(){
    // use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) // Step 4: convert data to a usable form
        .then(callback) // Step 5: send retrieved data to a callback function

};

function callback(response){
    console.log(JSON.stringify(response));
    // put code here to be run after data is loaded

    console.log(response);
}

window.onload = jsAjax();