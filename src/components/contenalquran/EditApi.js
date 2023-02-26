import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const EditApi = () => {
    const [getDatas, setGetDatas] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/id/index.json"
        }).then((result) => {
            setGetDatas(result.data)
        })
        
    }, [])

    return (
        <div className="w-screen bg-[#101329]">
            <div className="">
                <h2 className="text-center text-[20px] font-bold text-white pt-4">DAFTAR SURAH</h2>
                <div className="grid grid-cols-3  gap-4 px-10 pt-[1rem] pb-10 ">
                    {getDatas.map((data) => {
                        return (
                            <div key={data.id}>
                                <Link to={`/surah/${data.id}`}>
                                    <div className="border-2  flex justify-between border-black w-full text-white px-2 items-center py-3 cursor-pointer hover:bg-[white] hover:text-black rounded-[5px]">
                                        <p>{data.id}</p>
                                        <div className="text-center">
                                            <p>{data.transliteration}</p>
                                            <p>{data.translation}</p>
                                        </div>
                                        <p className="">{data.name}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EditApi