import React, { useEffect, useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () =>{

   const [tag,setTag] = useState ('car');

   const {gif,loading,fetchData} = useGif(tag);
 
 

         
   return (
    <div className='w-1/2  bg-green-600 rounded-lg  borderwaliclass
       flex flex-col  items-center gap-y-[5px]'>

        <h1 className='text-3xl font-bold underline uppercase mt-5 '>  Random {tag} GIF </h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width="450" />)
        }

        <input 
            className='w-10/12 py-2 text-2xl mt-4 mb-3 text-center borderwaliclass'
                onChange={(event) =>  setTag(event.target.value) }
                value={tag}
            />

        <button  className="bg-yellow-400 rounded-lg w-10/12 py-2 text-2xl mt-4 mb-3" 
          onClick={ () => fetchData(tag)}>
            Generate
        </button>

    </div>
    )
}


export default Tag;