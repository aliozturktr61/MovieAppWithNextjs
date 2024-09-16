"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Movies = ({ dt }) => {
const router = useRouter()

  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className="w-[500px] imgContainer relative cursor-pointer">
      <Image style={{objectFit:"cover"}}
        width={500}
        height={400}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`} alt={dt?.title}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 ">
        <div className=" text-2xl font-bold">{dt?.title}</div>
        {dt?.release_date} - {dt?.vote_average}
      </div>
    </div>
  );
};

export default Movies;
