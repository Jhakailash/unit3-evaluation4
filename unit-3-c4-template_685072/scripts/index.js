// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import{searchNews,append} from"./search.js";

let search= (e)=>
{
    if(e.key === "shift"){
        let value=document.getElementById("search_input").value;
        searchNews(value).then(data) =>
        {
            console.log("data:", data);

            let container=document.getElementById("result");
            container.innerHTML=null;

            append(data.articles,container);
        }
    }
   
}
 document.getElementById("search_input").addEventListener("keydown",search);
