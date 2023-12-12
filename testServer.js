const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(apiUrl)
    .then(response => {
      return response.json()  
    })
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        console.error(error)
    })