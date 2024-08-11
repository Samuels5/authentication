// 'use client'
import React from 'react';
//import jobs from './../../../public/jobs.json';
import Image from 'next/image';

const Part = async ({searchParams} : {
  searchParams:{
    name:string;
    id : number;
  }
}) => {
  const come = await fetch('https://akil-backend.onrender.com/opportunities/search')
  
  if (!come.ok){
    return <div>network problem</div>
  }
  const jobs = await come.json()
  console.log(jobs) 
  const num = Number(searchParams.id)
  return (
    <div>
        <div className="pl-8 pt-24 flex">
        <div className="w-auto"> 
          <div className="text-3xl mt-16 pb-4 font-bold">Description</div>
            <p className="mb-14">{jobs.data[num].description}</p>
          <div className="text-3xl pb-4 font-bold">Responsibilities</div>
          <div className="">
            {jobs.data[num].responsibilities}
          </div>
          <div className="mt-14 text-3xl pb-4 font-bold">Ideal Candidate we want</div>
          <ul>
            <li className="mb-2">{jobs.data[num].idealCandidate}</li>
          </ul>
          <div className="mt-14 text-3xl pb-4 font-bold">When & Where</div>
          <div className='flex justify-center mb-5'>
          <Image src='/loc.png' alt='v' width={35} height={20}/>
          <p className='pl-2'>{jobs.data[num].whenAndWhere}</p>
          </div>

        </div>
        <div className="ml-12 ">
          <div className="border-b-2 border-gray-400 mr-8">
            <div className="text-3xl w-72 mb-2">About</div>
              <div className="flex mb-4">
                <div><Image src='/public/end.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Posted On</div>
                  <div>{jobs.data[num].datePosted}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/dea.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Deadline</div>
                  <div>{jobs.data[num].deadline}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/loc.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Location</div>
                  <div>{jobs.data[num].location.map((val:string)=><div key=''>{val}</div>)}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/end.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28"> 
                  <div >Start Date</div>
                  <div>{jobs.data[num].startDate}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/end.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >End Date</div>
                  <div>{jobs.data[num].endDate}</div>
                </div>
              </div>
          </div>
          <div className=" border-b-2 border-gray-400 mr-8">
            <div className='font-mono font-semibold text-2xl text-indigo-950 py-5'>Categories</div>
            <div className='flex'>
            {jobs.data[num].categories.map((val: string)=><div key='' className='text-xs rounded-full bg-gray-100 p-1 mr-1 text-yellow-500'>{val}</div>)}
            </div>
          </div>
          <div className="mr-8">
            <div className='font-mono font-semibold text-2xl text-indigo-950 py-5'>Required  Skills</div>
            {jobs.data[num].requiredSkills.map((val: string)=><button key = '' className='text-xs rounded-full bg-gray-100 p-1 mr-1 text-gray-900'>{val}</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part