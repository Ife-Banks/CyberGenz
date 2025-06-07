import logo from '../img/logo.png';
import { motion } from "framer-motion";
const navigate = () => {
    return (
        <motion.div 
        initial={{
            y:-100,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        transition={{
            duration:1.0,
            delay:2,
            type:'tween',
            stiffness:120
        }}
        className='absolute text-white flex items-center justify-between w-full px-5 md:max-lg:pl-10 lg:pl-30 md:max-lg:pr-10 lg:pr-20  lg:gap-x-20 bg-[#131718] font-redHat z-2 p-1 ' >
            <div className=' w-fit'>
               <a href="">
               <img src={logo} alt="" srcset=""/>
               </a>
            </div>
            <div className=' flex items-end sm:items-center w-[70%] sm:max-md:justify-evenly md:justify-between flex-col sm:flex-row z-2 gap-x-2 '>
                <ul className='sm:flex w-100 sm:max-lg:w-[70%] flex-col sm:flex-row hidden h-15'>
                    <li className=' flex items-center justify-center w-20 hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out group'><a href="" className='group-hover:scale-110 transition duration-300 ease-in-out'>About</a></li>
                    <li className='  flex items-center justify-center w-20 hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out group'><a href="" className='group-hover:scale-110 transition duration-300 ease-in-out'>Partners</a></li>  
                    <li className=' flex items-center justify-center w-20 hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out group'><a href="" className='group-hover:scale-110 transition duration-300 ease-in-out'>Blog</a></li>
                    <li className='flex items-center justify-center w-20 hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out group'><a href="" className='group-hover:scale-110 transition duration-300 ease-in-out'>Event</a></li>
                    <li className='flex items-center justify-center w-20 hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out group'><a href="" className='group-hover:scale-110 transition duration-300 ease-in-out'>Teams</a></li>
                </ul>
                <motion.div 
                
                className='flex items-center justify-center  rounded-3xl border border-[rgba(255,255,255,0.40)]
                    border-[color(display-p3_1_1_1/0.40)]
                    bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)]
                    bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] sm:max-md:px-1  h-10 w-40 lg:w-40'>
                        <motion.a
                        initial={{
                            opacity:0
                        }}
                        animate={{
                            opacity:1
                        }}
                        transition={{
                            delay:1.7,
                            duration:0.5
                        }}
                        href="" className=' sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold flex justify-center'>
                        Join Community
                        </motion.a>
                </motion.div>
            </div>
            </motion.div>
    )
}
 
export default navigate;