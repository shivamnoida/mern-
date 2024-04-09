function callApi() {
    fetch("https://dummyjson.com/recipes")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            renderUI(data);
            // console.log(data);
        })
        // .catch((error) => {
        //     console.error('Error fetching data:'+ error);
        // });
}

callApi();

function renderUI(data) {
    const recipes = data.recipes; 
    // console.log(recipes)
    for(let i=0;i<recipes.length;i++)
    {
    
    console.dir(recipes[i]);
    const div=document.createElement("div")
    const h3=document.createElement("h3");
    h3.innerText=recipes[i].name;
    const img=document.createElement("img")
    img.src=recipes[i].image;
    const h6=document.createElement("h6")
    h6.innerText=recipes[i].
ingredients;
// console.log(h6)
  
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(h6);
    container.appendChild(div);
    
    }
}


// renderUI(); // Uncomment this line to run the renderUI() function separately
