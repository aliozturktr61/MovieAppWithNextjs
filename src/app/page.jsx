"use client"
import Movies from "@/components/Movies";
import React from "react";
/* menüde tıklanılan değeri karşılamak için serarchparamsı alıyoruz */
const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=b8a9496dee663a618801da127b65c851&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );
  const data = await res.json();

  return (
    <div className="flex items-center flex-wrap gap-3">
      {data.results?.map((dt,i)=>(
        <Movies key={i} dt={dt}/>
      ))}
    </div>
  );
};

export default Page;
