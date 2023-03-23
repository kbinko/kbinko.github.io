import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, image, tags, source_code_link, index }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
				</div>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
						<img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white text-[24px] font-bold">{name}</h3>
					<p className="text-secondary text-[14px] mt-2">{description}</p>
				</div>

				<div className="flex flex-wrap gap-2 mt-4">
					{tags.map((tag) => (
						<p key={tag.name} className={`${tag.color} text-[14px]`}>
							{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Following projects showcase my skills and knowledge through real-world examples of my work. Every
					project is described in detail and includes a link to the source code as well as a live demo. It
					showcases my abilities in problem solving, working with different technologies and managing
					projects.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
