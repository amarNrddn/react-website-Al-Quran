import LogoNav from '../../assets/logo-nav.png'
import LogoAwal from '../../assets/logo-al.png'
import { SiPlatformdotsh } from 'react-icons/si'
import EditApi from '../contenalquran/EditApi'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {

    return (
        <div className='w-screen  '>
            <div className="flex items-center bg-[#101329] justify-between px-[1rem] py-1 fixed w-screen shadow-md">
                <div className=" flex items-center">
                    <img src={LogoNav} alt="" className=' w-[6rem] h-[6rem]' />
                    <h2 className='text-white font-bold text-[20px]'>Al-Qur'an</h2>
                </div>
                <div className="ml-[-5rem]">
                    <div className="flex items-center">
                        <input type='search' placeholder='cari ayat atau terjemah...' className='w-[15rem] outline-none pl-[1.8rem] text-white bg-[#101329]' />
                        <div className="absolute pl-1">
                            <BsSearch className='text-white' />
                        </div>
                    </div>
                </div>
                <div className="pr-[1rem]">
                    <SiPlatformdotsh className='text-[#0babcc] text-[18px]' />
                </div>
            </div>

            {/* Logo awal */}
            <div className="">
                <div className="flex w-full justify-center pt-[6rem] bg-[#101329]">
                    <img src={LogoAwal} alt="" className='h-[30rem]' />
                </div>
            </div>

            <div className="">
                <EditApi />
            </div>
        </div>
    )
}

export default Navbar