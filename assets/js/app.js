//Intial Value
const API_KEY='8dddd58c0616af22ec23a77f66e03313';

const url='https://api.themoviedb.org/3/search/movie?api_key=8dddd58c0616af22ec23a77f66e03313';


const buttonElement=document.querySelector('#search');

const inputElement=document.querySelector('#inputValue');




buttonElement.onclick=function(event){
    event.preventDefault();
    const value=inputElement.value;
   
    const newUrl=url+'&query=' +value;
    fetch(newUrl)
         .then((res)=>res.json())
         .then((data)=>{
             console.log('Data: ',data);
         })
         .catch((error)=>{
             console.log('Error: ',error);
         }); 

    console.log("Value:",value);
   
}






