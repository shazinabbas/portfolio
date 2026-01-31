import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';
import { styles } from '../styles';
import { figma, github1 } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, customSlug, fig }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useLayoutEffect(() => {
    function updateSize() {
      setIsDesktop(window.innerWidth > 900);
    }
    window.addEventListener('resize', updateSize);
    updateSize(); // Initial check on mount
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      {isDesktop ? (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary p-3 sm:p-5 rounded-2xl w-full sm:w-[360px]"
          >
            <div className="relative w-full h-0 pb-[56.25%] sm:pb-[75%]">
              <img
                src={image}
                alt={name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={fig ? figma : github1}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
              <div className="mt-2 text-secondary text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px]">
                <span>{description}</span>
                <Link to={`/blog/${customSlug}`} className="gradient-text cursor-pointer mt-2 position-relative">
                  Read more
                </Link>
              </div>
            </div>
            <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag, index) => (
                <p
                  key={tag.name}
                  className={`text-[12px] sm:text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ) : (
        <div className="bg-tertiary p-3 sm:p-5 rounded-2xl w-full max-w-[340px] mx-auto">
          <div className="relative w-full h-0 pb-[75%]">
            <img
              src={image}
              alt={name}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={fig ? figma : github1}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 sm:mt-5">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
            <div className="mt-2 text-secondary text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px]">
              <span>{description}</span>
              <Link to={`/blog/${customSlug}`} className="gradient-text cursor-pointer mt-2 position-relative">
                Read more
              </Link>
            </div>
          </div>
          <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag, index) => (
              <p
                key={tag.name}
                className={`text-[12px] sm:text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Works = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useLayoutEffect(() => {
    function updateSize() {
      setIsDesktop(window.innerWidth > 900);
    }
    window.addEventListener('resize', updateSize);
    updateSize(); // Initial check on mount
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
      ) : (
        <div>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>
      )}

      <div className="w-full flex">
        {isDesktop ? (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        ) : (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        )}
      </div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center\">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            customSlug={project.customSlug}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
