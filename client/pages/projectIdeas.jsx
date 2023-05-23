import React, { useState } from "react";
import Image from "next/image";
import { Input } from "semantic-ui-react";
import {
  AiOutlineWallet,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineRight,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import 'semantic-ui-css/semantic.min.css';
import {
  TbTriangleFilled,
  TbTriangleInvertedFilled,
  TbSearch,
} from "react-icons/tb";
import Link from "next/link";
const ProjectIdeas = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick,setModalClick]=useState(false)
  const changeYours = () => {
    setShowYours(!showYours);
  };
  const changeOthers = () => {
    setShowOthers(!showOthers);
  };
  const openNav = () => {
    setPhonenav(!phonenav);
  };
  const openModal=()=>{
    setModalClick(!modalClick)
  }
  return (
    <div className="container1 min-h-[100vh] bg-gradient-to-b sm:bg-gradient-to-r from-[#2A064B] from-50% to-[#030C30] t0-50%">
      <div
        className="listViewUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        {/* nav */}
        <div className="mt-10 mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto  bg-gradient-to-r from-[#030C30] from-50% to-[#43087A] t0-50% rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img">
            <Image
              src="/images/CollabXLogo.png"
              width="140"
              height="140"
              alt="CollabXLogo"
              className="hidden sm:block "
            />
          </div>
          <div className="w-[30%]">
            <ul className="flex justify-between font-medium text-white ">
            <li ><Link className="text-white" href="/listView" >Profile</Link></li>
              <li ><Link className="text-white" href="/projectIdeas">Ideas</Link></li>
              <li ><Link className="text-white" href="/yourIdeas">Showcases</Link></li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
              <Image
                height={20}
                width={20}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div>
            <Image
              height={40}
              width={40}
              src="/images/avatar.png"
              alt="avatar"
              className="ml-auto mr-0 "
            />
          </div>
        </div>

        {/* mobile */}
        {/* nav */}
        <div className="flex flex-row items-center justify-between m-5 sm:hidden">
          <div>
            <Image
              height={48}
              width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
          </div>
          <div className="w-[30%] hidden">
            <ul className="flex justify-between font-medium text-white ">
              <li>Profiles</li>
              <li>Ideas</li>
              <li>Showcases</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2">
              <Image
                height={26}
                width={26}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div>

            <button onClick={openNav}>
              {" "}
              <BsThreeDotsVertical color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
       {/* search  */}
      <div className="flex items-center justify-center w-full mb-4 ">
          <Input
            icon="search"
            placeholder='Search by project Ideas or by tags' className='sm:w-[40%] w-[70%] m-4 ml-6'
          />
          <AiFillPlusCircle
            size={50}
            color="#E40E82"
            className="mr-4 rounded-full border-4 border-[#ffffff] border-opacity-[0.16]  cursor-pointer "
            onClick={openModal}
          />
        </div>


            {/* opennedNav in phn */}
            {phonenav &&   <div className='relative z-10 w-full ' >
        <ul className='absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]'>
               <Link href="/listView"> <li className='p-3 text-white border-b-2 border-black '>Profiles</li></Link>
               <Link href="/projectIdeas"> <li className='p-3 text-white border-b-2 border-black '>Ideas</li></Link>
               <Link href="/yourIdeas">  <li className='p-3 text-white border-b-2 border-black'>Showcases</li></Link>
            </ul>
        </div>}

             {/* Modal */}
             {modalClick && <div className="absolute z-10 w-[97%]">   <div className= ' text-white bg-black bg-opacity-60 w-[100%] h-[80vh] flex flex-col items-center'>
    <div onClick={openModal} className='flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer'>✕</div>
    <div className=' flex flex-col items-center justify-center w-[70%] text-sm font-semibold'>
        <h1 className='mb-2 text-xl font-semibold'>Create Project Idea</h1>
        <div className='w-full m-2'>
            <p>Project Name</p>
            <input className='w-full py-1 my-1 bg-black border-[0.05rem] rounded-md font-normal text-gray-300' type="text" />
        </div>
        <div className='w-full m-2'>
            <p>Description</p>
            <textarea className='w-full my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' name="" id="" cols="30" rows="6"></textarea>
        </div>
        <div className='w-full m-2'>
            <p>Skillset Required</p>
            <input className='w-full py-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' type="text" />
        </div>
        <div className='w-full m-2'>
           <div className='flex'><p className='pr-1'>Url </p><p className='font-normal text-gray-300'> (optional)</p></div> 
            <input className='w-full py-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' type="text" />
        </div>
        <div className='flex justify-end w-full m-2 mb-4 '><button className="bg-[#E40E82] py-1 px-4 rounded-xl font-semibold">CREATE</button></div>
        </div>    
    </div></div> } 

      <div className="relative cardsBackground w-[90%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
      <div className="z-0 grid grid-cols-1 gap-8 cardsCollection sm:grid-cols-2 lg:grid-cols-3">


         

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
        <AiOutlineRight className="text-[#05eafa] mt-2" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeas;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]