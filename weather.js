
let key = 'ee6b63b9b9ba999228097542b2781b7d';

let container =document.getElementById('container')


let map=document.getElementById('gmap_canvas')


async function getWeather(){

    try{
    let city = document.getElementById('city').value

   let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

   let data = await res.json();
   console.log('data:',data);

   appendData(data);
    }
    catch (err){
        console.log('err:',err);
    }


   }



   
  // let  units=metric;




//go to openweather documentation 
//figure out the url that we can use to get data
//do you  have url ?
//fetch()
//make api request to get weather data for ur city 




   function appendData(data){


    // if i remove this means the container migth not be empty.....
   container.innerHTML=null;

    let name=document.createElement('p')

     name.innerText = `Name - ${data.name}`

     let temp=document.createElement('p')
     temp.innerText=`Temp - ${data.main.temp}`

     let humidity=document.createElement('p')

     humidity.innerText=`Humidity - ${data.main.humidity}`
        

     let pressure=document.createElement('p')

     pressure.innerText=`pressure - ${data.main.pressure}`
        
    container.append(name,temp,humidity,pressure);
    
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=10&ie=UTF8&iwloc=&output=embed`
    

  

   }

        console.log(this);





