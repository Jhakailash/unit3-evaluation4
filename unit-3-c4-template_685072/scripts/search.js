// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let searchNews =async(value) =>
{
    try
    {
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data =await res.json();
        console.log("data",data.articles);

        return data;
    }
    catch(err)
    {
        console.log("err",err);
    }
}

let append = (data , container)=>
{
    data.forEach(({description,title,urlToImage}))=>
    {
        let div= document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("class",img)
        image.src=urlToImage

        let title = document.createElement("h3");
        title.innerHTML=title;

        letdesc =document.createElement("p");
        desc.innerHTML = description;

        div.append(image,title,desc);
        container.append(div);
    })
}

export{searchNews,append    }