import Navigate from './nav';
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const gridAnimate ={
    initial: {
        opacity:0
    },
    visible: {
        opacity:1,
        transition: {
            duration:2.0
        }
    }
}

const mainTextAnimate = {
    initial: {
        opacity: 0
    },
    visible: { 
        opacity:1,
        transition:{
                    delay:3.5,
                    duration:2.5
                }
    }
}
const Hero = () => {
    return ( 
        <div className='flex flex-col overflow-hidden relative items-center'>
            {/* The Background grid */}
            <motion.div 
                variants={gridAnimate}
                initial = 'initial'
                animate = 'visible'
            className='hw-fit h-fit grid grid-cols-6  sm:grid-cols-8 bg-black self-center'>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)] '></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 sm:bg-[#131718] bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[#131718] sm:bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-1 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 sm:bg-[#131718] bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)] '></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0 border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0   border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
        </motion.div> 
            <div className='md:block absolute -top-70 rounded-full h-[1026px] w-[1026px]  class="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(22,22,24,0)_0%,rgba(22,22,24,1)_46.59%)] bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_44.59%)] sm:max-md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_50.59%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_60.59%)] bg-transparent b' > </div>
            {/* Navigation Bar */}
            <Navigate/>
            {/* HEro Section */}
            <motion.div 
            
            className='z-1 absolute top-[20%]  lg:top-[22%] md:max-lg::top-[30%] text-white w-[100%] sm:max-lg:w-[90%] lg:w-[61%] flex flex-col gap-y-5 items-center p-1'>
                <motion.h1 
                variants={mainTextAnimate}
                initial='initial'
                animate='visible'
                className='font-bold text-3xl/12 sm:max-md:text-4xl/15 md:text-5xl/18 text-center p-2 font-redHat relative z-1'>
                    Empowering the Next <span className="relative after:hidden after:lg:block after:absolute after:text-xs after:rounded-xl after:py-1 after:lg:py-2 after:w-35 after:h-7 after:place-self-center after:content-center after:text-white after:inset-x-0 after:left-10 after:lg:left-[140%] after:-top-[40%] after:sm:max-lg:-top-[25%] after:lg:-top-[25%] after:rounded-bl-none after:content-['Penetration\00a0Testing']  after:bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)] after:bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] after:-z-1"> Generation</span> of <span
                    className="relative before:p-1 before:hidden  before:lg:block before:absolute before:content-['Cyber\00a0Security\00a0Analyst'] before:text-xs   before:w-35 before:h-7  before:right-35 before:top-2 before:border  before:place-content-center before:rounded-xl before:rounded-br-none before:text-black before:bg-[#FF0] before:bg-[color(display-p3_1_1_0)] before:border-[rgba(0,0,0,0.40)] before:border-[color(display-p3_0_0_0/0.40)] "> Cyber</span> Defenders to Protect, Innovate, and Lead in a <span className=" relative after:absolute after:hidden after:lg:block after:text-xs after:rounded-xl after:w-35 after:h-7 after:place-self-center after:text-white after:inset-x-0 after:left-10 after:lg:left-110 after:-top-[40%] after:sm:max-lg:-top-[25%] after:lg:top-[0%] after:rounded-br-none after:content-['Network\00a0Security']  after:bg-[#F00] after:bg-[color(display-p3_1_0_0)]after:bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] after:font-medium after:-z-1 after:place-content-center after:border after:border-[rgba(255,255,255,0.40)]">Secure</span> <span className='relative after:hidden after:lg:block after:absolute after:content-["Information\00a0Security"] after:font-inter after:font-medium  after:text-xs after:border after:w-35 after:h-7 after:place-content-center after:rounded-xl after:rounded-br-none after:right-[105%] after:bg-[#F00] after:bg-[color(display-p3_1_0_0)] after: border-[rgba(255,255,255,0.40)] after:border-[color(display-p3_1_1_1/0.40)]'>Digital</span> <span className='relative after:hidden after:lg:block after:absolute after:content-["and\00a0many\00a0more..."] after:font-inter after:font-medium  after:text-xs after:border after:w-35 after:h-7 after:place-content-center after:rounded-xl after:rounded-bl-none after:left-full after:bg-[#00F] after: border-[rgba(255,255,255,0.40)] after:border-[color(display-p3_1_1_1/0.40)]'> World.</span>
                </motion.h1>
                <motion.p 
                initial={{
                    y:250
                }}
                animate={{
                    y:0
                }}
                transition={{
                    delay:1.5,
                    duration:1.5,
                    type:'spring',
                    stiffness:100
                }}
                className='text-xs w-fit text-center text-[#6B7275] text-[color(display-p3_0.424_0.4469_0.4583)] font-inter after:'>Shaping Tomorrow’s Cybersecurity Leaders with Cutting-Edge Skills and Unwavering Commitment.
                </motion.p>
                <div className='flex gap-x-3 lg:gap-x-6 justify-center'>
                    <motion.div 
                    initial={{
                         opacity:0,
                        x:'-20vw'
                       
                    }}
                    animate={{
                        opacity:1,
                        x:0
                        
                    }}
                    transition={{
                        delay:1.5,
                        duration:2.7,
                        type:'spring',
                        stiffness:35
                    }}
                    className='flex items-center justify-center  rounded-3xl border border-[rgba(255,255,255,0.40)]
                    border-[color(display-p3_1_1_1/0.40)]
                    bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)]
                    bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] sm:max-md:px-1  h-10 w-40 lg:w-40'>
                        <a href="" className=' sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold flex justify-center'>
                        Join Community
                        </a>
                    </motion.div>
                    <motion.div 
                     initial={{
                         opacity:0,
                        x:'20vw'
                       
                    }}
                    animate={{
                        opacity:1,
                        x:0
                        
                    }}
                    transition={{
                        delay:1.5,
                        duration:2.7,
                        type:'spring',
                        stiffness:35
                    }}
                    className='flex items-center justify-center rounded-3xl  border border-[#FEFEFE] sm:max-md:px-1  h-10 w-40 lg:w-40'>
                        <a href="" className=' sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold flex justify-center'>
                            Watch a demo
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
       
     );
}
 
export default Hero;