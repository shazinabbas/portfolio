import { motion } from 'framer-motion';

import { styles } from '../styles'

import { Badge, ComputersCanvas } from './canvas';

const Hero = () => {
  return (

    <section className="relative w-full h-screen mx-auto">
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center px-60 py-48">
          <h1 className={`${styles.sectionSubText} text-white`}>
            <span className="text-[#31BB69]">Pull it!</span>
          </h1>
        </div>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#31BB69]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi👋🏻, I'm <span className="text-[#31BB69]">Shazin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Associate Software Engineer <br className="sm:block hidden" />Kaleris
          </p>
        </div>

      </div>

      <Badge />
      
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>


      
    </section>
  )
}

export default Hero
