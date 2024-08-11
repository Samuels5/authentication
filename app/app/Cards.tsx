import React from 'react'
import Image from 'next/image'

const Cards = async ({job, ind}: {job:any, ind:number}) => {
  const come = await fetch('https://akil-backend.onrender.com/opportunities/search')
  if (!come.ok){
    return <div>network problem</div>
  }
  const jobs = await come.json()
  return (
    <div className='p-6 rounded-3xl border my-9 border-gray-400 divide-black'>
    <div className='  flex'>
    <div className='rounded-lg'>
      <img src={jobs.data[ind].logoUrl || 'https://media.istockphoto.com/id/1290160752/vector/work-from-home-line-icon-editable-stroke.jpg?s=612x612&w=0&k=20&c=YkgybsrnBfnFR0lGjTClpObiq5g_MAEhPVJGxK94cfg='} alt="adsd" width={67*3} height={59*3}/> 
    </div>
    <div className=' ml-16 overflow-auto'>
      <h1 className='font-mono font-semibold text-2xl text-indigo-950'>{job.title}</h1>
      <h4 className='font-extralight text-gray-400'>{job.orgName} . {job.location.map((val:any) =>{val})}</h4>
      <p className='text-sm text-zinc-800'>{job.description}</p>
      <div className='pt-2'>
      <button className='text-xs rounded-full bg-gray-100 p-1 mr-1 text-green-500'>In Person</button>
      <button className='text-xs rounded-full border border-yellow-600 p-1 mr-1 text-yellow-600'>Education</button>
      <button className='text-xs rounded-full border border-violet-900 p-1 mr-1 text-violet-900'>IT</button>
      </div>
    </div>
    </div>
    </div>
  )}


export default Cards