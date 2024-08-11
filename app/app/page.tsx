// 'use client'
import Image from "next/image";
import Cards from "./Cards";
import Part from './Part';
import Link from 'next/link';
//import jobs from './../../public/jobs.json';




export default async function New() {
  const come = await fetch('https://akil-backend.onrender.com/opportunities/search')
  if (!come.ok){
    return <div>network problem</div>
  }
  const jobs = await come.json()
  console.log(jobs) 
  
  const card = <div>
    {jobs.data.map((job:any,ind:number)=>(<Link key={job.title}  href={{
      pathname :'/app/about',
      query : {
        name: job.title,
        id: ind,
        job: job
      }
      }} > 
        <Cards key={ind} job = {job} ind = {ind} />
      </Link>))}
  
  </div>
  // console.log(jobs) 
  return (
    <div>
      {/* <Part/> */}
      <div className="pl-[85px] pt-32 pr-[16rem] ">
        <div className="flex justify-between items-center">
        <div>
        <div className="font-black text-4xl">Opportunities</div>
        <div className='font-extralight text-gray-400 pt-1'>Showing 73 results</div>
        </div>
        <div className="">Sort by: <strong>Most relevant</strong></div>
        </div>
        {card}
      </div>
    </div>
  );
}
