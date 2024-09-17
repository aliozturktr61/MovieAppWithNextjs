"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Tabs = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    console.log(genre, "genre");
    const tabs = [{ name: "En Popüler", url: "popular" }, {name: "En Çok Rating Alanlar", url: "top_rated"},{name: "Yakında Gelecekler", url: "upcoming"}];
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-5'>
     {tabs.map((tab,i)=>(
        <Link className={`text-2xl cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600 " : "opacity-50"}`}  href={`/?genre=${tab.url}`} key={i}>{tab.name}</Link>
     ))}
    </div>
  )
}

export default Tabs
