import { motion } from 'framer-motion'
import { AchievementsC } from '../index'

const Achievements = () => {
    return (
        <div className="border-b border-neutral-900 pb-3">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-3xl my-20 text-center">Achievements & Certifications
            </motion.h1>
            <div className='px-8'>
                {AchievementsC.map((achievementc, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        key={index} className="mb-8 flex flex-wrap justify-center ">
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{achievementc.title}</h6>
                            <p className="mb-4 text-neutral-400">{achievementc.description}</p>

                        </div>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}

export default Achievements
