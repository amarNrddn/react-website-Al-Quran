import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import { ProgressBar } from 'react-loader-spinner'
import { Route, Routes, Link } from 'react-router-dom'
import DetailSurah from "./components/contenalquran/DetailSurah";

function App() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="">
      {Loading ? (
        <div className="h-screen flex justify-center items-center m-auto ">
          <div className="">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor='#51E5FF'
              barColor='#101329'
            />
            <p className="text-center bt-[-1rem]  text-[#101329] font-sans">Al Qur'an</p>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path='/surah/:id' element={<DetailSurah />} />
          <Route path="*" element={<p>page not font</p>} />
        </Routes>
      )}


    </div>
  );
}

export default App;
