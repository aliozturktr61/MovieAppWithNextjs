"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import Link from "next/link"; // Import Link component
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    { name: "Hakkımızda", url: "/about" },
    { name: "Giriş Yap", url: "/login" },
  ];

  const searchFunch = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex items-center p-5 h-20 gap-5">
      {/* Wrap MovieApp in a Link component */}
      <Link href="/">
        <div className="bg-amber-600 p-3 rounded-lg text-2xl font-bold cursor-pointer">
          MovieApp
        </div>
      </Link>
      
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunch}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          placeholder="Arama Yapınız..."
          type="text"
        />
        <BiSearch size={25} />
      </div>

      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;