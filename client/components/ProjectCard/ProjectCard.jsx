import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { FiLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div>
      <div
        className="profileCard rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]"
      >
        <div className="flex justify-around profileCardUpperSection">
          <div className="h-12 socialIcons">
            <h3 className="text-[#fff] text-2xl">Project Idea Name</h3>
          </div>
          <div className="">
            <FiLink className="text-2xl text-[#fff]" />
          </div>
        </div>
        <div className="m-auto profileCardLowerSection">
          <div className="personDetails flex flex-col pl-[1rem] pr-[1rem] sm:justify-around">
            <div className="about bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[100%]">
              <h3 className="text-lg text-[#05eafa]">About</h3>
              <p className="text-[#fff]">
                Amet minim mollit non deserunt ullamco est sit aliqua non
                deserunt ullamco est sit aliqua{" "}
              </p>
            </div>
            <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[100%]">
              <h3 className="text-lg text-[#05eafa]">Skills</h3>
              <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-2 gap-4 text-[#fff]">
                <div className="sm:w-[70%] md:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
                  #C++
                </div>
                <div className="sm:w-[70%] md:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
                  Javascript
                </div>
                <div className="sm:w-[70%] md:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
                  MongoDb
                </div>
                <div className="sm:w-[70%] md:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
                  SQL
                </div>
              </div>
            </div>
          </div>
          <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
            <Link href="/profile" className="flex justify-between w-full">
              <h3 className="text-lg text-[#05eafa]">View Profile</h3>
              <AiOutlineRight className="text-[#05eafa] mt-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
