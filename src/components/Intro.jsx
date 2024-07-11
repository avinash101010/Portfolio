import { motion } from "framer-motion"
import { HERO_CONTENT } from '../index'
import profilePic from "../assets/Profile.png";

const container = (delay, ps) => ({
    hidden: { x: ps, opacity: 0 },
    visible: { x: 0, opacity: 1, transisiton: { duration: 0.5, delay: delay } },

})

const Intro = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="pb-16 text-4xl font-thin tracking-tight lg:mt-10 lg:text-7xl">Nimmala Avinash</motion.h1>
                        <motion.span
                            variants={container(1, -100)}
                            initial="hidden"
                            animate="visible"
                            className="text-3xl text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(0, 100)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light ">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img variants={container(0, 100)}
                            initial="hidden"
                            animate="visible"
                            className="rounded-2xl" height={500} width={500} src={profilePic} alt="ProfilePic" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro
