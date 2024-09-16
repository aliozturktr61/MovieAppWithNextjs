"use client"; /* hata almamak için burayı mutlaka yazıyoruz */
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const themeMode = theme === "system" ? systemTheme : theme;
  console.log(themeMode, "themeMode");
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? 
            <CiLight
            onClick={() => setTheme("light")}
            className=" cursor-pointer"
            size={25}
          />
         :   <CiDark
         onClick={() => setTheme("dark")}
         className=" cursor-pointer"
         size={25}
       />
         
        )}
    </div>
  );
};

export default ThemeComp;
