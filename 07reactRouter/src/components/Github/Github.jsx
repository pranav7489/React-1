import React from 'react'
import { useState,useEffect } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/hiteshchoudhary")
    //   .then(response =>response.json())
    //   .then(data=>{
    //     setData(data);
    //   })
      
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github follower:{data .followers}
    <img className='text-center' src={data.avatar_url} alt="Git picture" /> 
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () =>{
const response =  await  fetch("https://api.github.com/users/pranav7489");
 return response.json();
}