let button = doc.getElementById("button");
let content = document.getElementById("content");

// promise
// pending -- still waiting
// rejected -- it failed
//resolved -- it worked

button.addEventListener("click", async () => {
   let response = await axios.get("http://localhost:8080") 
    console.log(response.data);
    content.textContent = response.data;
});


