const dataDiv= document.querySelector('.data');
const fetchData=document.querySelector('.fetchdata');

fetchData.addEventListener('click',function(){

    fetch("https://randomuser.me/api/?results=20")
    .then(res=>res.json())
    .then(data=>{
           console.log(data);
          const names=data.results.map((item)=>{
              return item.name.first;
          })
            console.log(names);

           names.sort() ;
           dataDiv.innerHTML=names.join("<br>");

       })

})
