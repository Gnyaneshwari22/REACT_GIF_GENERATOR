import React, { useEffect, useState } from 'react'
import axios   from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () =>{


    const {gif,loading,fetchData} = useGif();

         
   return (
    <div className='w-1/2  bg-green-600 rounded-lg  borderwaliclass
       flex flex-col  items-center gap-y-[5px]'>

        <h1 className='text-3xl font-bold underline uppercase mt-5 '> A Random GIF </h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width="450" />)
        }

        <button  className=" bg-yellow-400 rounded-lg w-10/12 py-2 text-2xl mt-4 mb-3" onClick={() => fetchData()}>
            Generate
        </button>

    </div>
    )
}


export default Random;