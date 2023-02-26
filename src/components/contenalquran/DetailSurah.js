import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ProgressBar } from 'react-loader-spinner'
import axios from "axios"

const DetailSurah = () => {
    const [detailSurah, setDetailSurah] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/id/${params.id}.json`
        }).then((result) => {
            setDetailSurah(result.data.verses)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        })

    }, [])

    return (
        <div className="bg-[#101329]">
            {loading ? (
                <div className="h-screen flex justify-center m-auto items-center">
                    <div className="">
                        <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#51E5FF'
                            barColor='#fff'
                        />
                        <p className="text-center text-white font-sans">Al Qur'an</p>
                    </div>
                </div>
            ) : (

                <div className="h-screen py-[3rem] bg-[#101329]">
                    <p className="text-white text-center text-[30px] mb-[1rem]">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                    {detailSurah.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className="border-b-2 border-gray-800 pt-[1rem] bg-[#101329] w-full text-white pb-5">
                                    <div className="flex justify-end">
                                        <div className="pr-[4rem] pl-[5rem] ">
                                            <h2 className="text-[25px] mb-[1rem]">{data.text}</h2>
                                            <div className="">
                                                <p>{data.transliteration}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start  pt-[1rem] pl-[2rem]">
                                        <p className="pb-3 w-[60rem]">{data.id}. {data.translation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default DetailSurah