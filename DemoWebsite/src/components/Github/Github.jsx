import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
   const data =  useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/teenhokage15')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div>
      Github followers: {data.followers}
        <img src={data.avatar_url} alt="gitpic" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response  = await fetch('https://api.github.com/users/teenhokage15')
    return response.json()
}
