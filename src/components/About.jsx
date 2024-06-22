import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div
       variants={fadeIn("right", "spring", 0.5*index, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shedow-card'
      >
        <div 
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
         >
          <img src = {icon} alt = {title}
           className='w-16 h-16 object-contain' />
           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className = {styles.sectionSubText}>Introduction</p>
      <h2 className = {styles.heroHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >  
    HWelcome to my portfolio! I'm devesh, a dedicated software developer specializing in Next.js, React.js, Node.js, JavaScript, and TypeScript. With a strong foundation in frontend and backend technologies, I excel in crafting responsive, user-centric web applications. Using React.js and Next.js, I design intuitive interfaces that prioritize usability and aesthetics. On the backend, I leverage Node.js to build robust APIs and server-side logic, ensuring seamless functionality and performance.

My approach blends creativity with technical expertise to deliver scalable solutions that meet business goals effectively. I'm passionate about staying updated with the latest trends and technologies, continuously expanding my skill set to deliver cutting-edge solutions. 

Throughout my career, I've contributed to various projects, each demonstrating my proficiency in creating cohesive, end-to-end solutions. Whether you're looking to enhance an existing application or embark on a new development journey, I'm eager to collaborate. Let's connect and explore how we can bring your ideas to life!

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");