// import Image from 'next/image'
// import Meta from "@/public/Meta.png";
import React from 'react'

// const projectData = [
//   {
//     Image: Meta,
//     title: 'Metaversus',
//     description: 'Lorem100',
//     technologies: ["Next.JS", "Tailwind CSS", "Framer motion"]
//   }
// ]



const Project = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white"></div>
    </div>
  )
}

export default Project
