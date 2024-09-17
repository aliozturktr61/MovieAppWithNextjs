import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=51ac0cb256bf2dea75d3a20d26f069a7&query=${keyword}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json(); 


  return (
    <div>
      {!data?.results ? 
        <div>Aranılan kelimeye ait film bulunamadı....</div>
       : 
       <div className="flex flex-wrap items-center gap-3  ">
        {data.results.map((dt, i) => <Movies key={i} dt={dt} />)}
       </div>
      }
    </div>
  );
};

export default Page;