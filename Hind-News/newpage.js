console.log("app start");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=fa9283bded274608ac00eec78cf20db3")
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(da ta);
        renderUI(data)
    })
    
}

// call API
function renderUI(data){
    const articles = data.articles;
    
    for(let i=0;i<articles.length;i++){
        const root = document.getElementById("root");
        const ar=articles[i];
        console.log(ar);

    const div = document.createElement("div")
    div.setAttribute("class","news-card");
    // create parent div

    const h3 =document.createElement("h3");
    const img = document.createElement("img")
    img.setAttribute("class","news-card");
    img.src=ar.urlToImage;
    h3.innerText=ar.title;

    const p=document.createElement("p");
    p.innerText= ar.description;


    // img.style.height="200px"
    // img.style.weight="500px"
    
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    root.appendChild(div);
    
}
renderUI();
}
callAPI()

