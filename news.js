console.log("started");
function callApi(){
     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=8b402446c9a843ca93d0fa583bb2dfd6")
     .then((res)=>{
        return  res.json();

            //  console.log(data);
        })
        .then((data)=>
        {
            renderUI(data);
        })
    }
     
    
    

    function renderUI(data){
        //got the article from data
        const articles=data.articles;
        console.log(articles)
//single article from the article array
for(let i=0;i<articles.length;i++){
        const ar=articles[i];
        // console.log(ar);
        // console.log(data);
        //  const root=document.getElementById("root");
         const div=document.createElement("div");
         div.setAttribute("class","news-card");
        //  div.innerText=ar.title; 
        const h3=document.createElement("h3");
        h3.innerText=ar.title;
        const img=document.createElement("img");
        img.src=ar.urlToImage;
        const des = document.createElement("p");
        des.innerText = ar.description;
        const author=document.createElement("h3")
    ``
    div.appendChild(h3);
        div.appendChild(img);
       div.appendChild(des);
        root.appendChild(div) ; 
     }
    }
        // renderUI();
        callApi();