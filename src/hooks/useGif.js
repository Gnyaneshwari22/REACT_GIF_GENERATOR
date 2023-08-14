import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';


const url=  `https://api.giphy.com/v1/gifs/random?api_key=R0ZIgcMu0uHzcEluUUGDUGNJ31vxmbVP`;
// const tagMemurl =  `https://api.giphy.com/v1/gifs/random?api_key=R0ZIgcMu0uHzcEluUUGDUGNJ31vxmbVP&tag=${tag}`;

function useGif(tag) {
   
    const [gif,setGif] = useState("");
                                            //    const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [loading, setLoading] = useState('false');
 
     async function fetchData(tag){
 
         setLoading(true);
 
         const {data}=await axios.get(tag ? `${url}&tag=${tag}` : url);
         const imageSource = data.data.images.downsized_large.url;
         setGif(imageSource);
         console.log(imageSource);
 
         setLoading(false);
     }
 
     useEffect( () =>{
         fetchData('car');
     },[])
  
    return {gif,loading,fetchData};
}

export default useGif;