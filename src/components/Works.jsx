import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
// import { Projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";



const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
    return(
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt 
         options = {{
           max: 45,
           scale: 1,
           speed: 450,
         }}
         className = 'bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full'
        >
          <div className="relative w-full h-[230px]">
            <img src= {image} alt = {name}
             className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
             <div onClick={() => window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src = {github} alt= "github"
               className="w-1/2 h-1/2 object-contain flex" />

             </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag) => (
             <p key = {tag.name} className= {`text-[14px] ${tag.color}`}>
              #{tag.name}
             </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-17px max-w-3xl leading-[30px]"
        >
          During my tenure as a web developer, I engaged in a dynamic array of
          responsibilities that honed my skills and expanded my expertise in the
          realm of web technologies. My primary focus was on front-end
          development, where I adeptly translated design mockups into responsive
          and interactive web interfaces using HTML, CSS, and JavaScript. I
          implemented best practices in user interface design and ensured
          cross-browser compatibility and optimal performance across various
          devices. In addition to front-end work, I collaborated closely with
          back-end developers to integrate front-end logic with server-side
          functionalities, utilizing technologies such as RESTful APIs to fetch
          and display data dynamically. This collaboration enabled me to gain
          insights into full-stack development processes and enhance the overall
          user experience of web applications. Throughout my experience, I
          demonstrated a commitment to continuous learning and improvement,
          staying updated with the latest trends and technologies in web
          development. I actively participated in code reviews, brainstorming
          sessions, and Agile ceremonies, contributing to a collaborative and
          innovative team environment. Overall, my tenure as a web developer
          equipped me with a robust skill set in front-end development,
          proficiency in back-end integration, and a proactive approach to
          problem-solving within a team-oriented setting.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key = {`project-${index}`}
          index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
