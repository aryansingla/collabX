import Modal from "@/components/Modal";
import Navbar from "@/components/Nav/Navbar";
import ProposalCard from "@/components/ProposalCard/ProposalCard";
import Image from "next/image";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

const ViewIdea = () => {
  const [owner, setOwner] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [room, setRoom] = useState(true);
  const [proposal, setProposal] = useState(false);
  const [desc, setDesc] = useState("");
  const [projectIdea, setProjectIdea] = useState({
    name: "",
    description: "",
    tags: [],
  });
  const create = () => {
    console.log(projectIdea);
    setModalClick(!modalClick);
    setProjectIdea({
      name: "",
      description: "",
      tags: [],
    });
  };
  const openNav = () => {
    setPhonenav(!phonenav);
  };
  const openModal = () => {
    setModalClick(!modalClick);
  };
  const printDesc = () => {
    console.log(desc);
    setDesc("");
  };
  return (
    <div className=" min-h-[100vh] sm:p-10  w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#23094E] from-0% to-black to-100%">
      {/* Nav  */}
      <Navbar phonenav={phonenav} openNav={openNav} />
      {/* search  */}
      <div className="flex items-center w-full mb-4 justify-evenly sm:hidden">
        <Input
          icon="search"
          placeholder="Search by project Ideas or by tags"
          className="w-[70%] m-4 ml-6"
        />
        <AiFillPlusCircle
          size={45}
          color="#E40E82"
          onClick={openModal}
          className="mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full "
        />
      </div>

      {/* Modal */}
      <Modal
        openModal={openModal}
        modalClick={modalClick}
        projectIdea={projectIdea}
        setProjectIdea={setProjectIdea}
        create={create}
      />
      <div className="flex justify-end mt-4 mb-6 mr-4 sm:hidden">
        {/* owner  */}
        {owner ? (
          room ? (
            <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
              Enter Room{" "}
              <Image
                height={8}
                width={14}
                src="/images/enterArrow.png"
                alt="enter room"
                className="ml-3"
              />{" "}
            </button>
          ) : (
            <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
              Create Room{" "}
              <Image
                height={8}
                width={14}
                src="/images/plus.png"
                alt="enter room"
                className="ml-3"
              />{" "}
            </button>
          )
        ) : (
          // user and proposal sent
          proposal &&
          (!room ? (
            // part of it
            <div className="flex items-center justify-end mx-6 -mb-4 text-white sm:hidden ">
              {" "}
              <MdCelebration className="mr-2" size={20} />
              You are part of this project
            </div>
          ) : (
            // enter room
            <div className="flex justify-end mx-6 mb-1 mr-4 sm:hidden">
              <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
                Enter Room{" "}
                <Image
                  height={8}
                  width={14}
                  src="/images/enterArrow.png"
                  alt="enter room"
                  className="ml-3"
                />{" "}
              </button>
            </div>
          ))
        )}
      </div>
      <div className="max-w-screen-xl m-auto text-lg">
        <div className="flex flex-col sm:flex sm:flex-row text-white m-6 rounded-md  bg-[#01002A] sm:bg-inherit px-6 py-8">
          <div className="flex flex-col sm:w-[60%] sm:m-4">
            <h1 className="flex text-2xl ">
              Project Idea Name{" "}
              <Image
                height={6}
                width={14}
                src="/images/blockChainSymbol.png"
                alt="blockchain"
                className="ml-4 rotate-12"
              />
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
              <br />
              <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="flex flex-col mt-6 sm:w-[40%] sm:m-6 sm:mt-14">
            {/* entry room  */}
            <div className="justify-end hidden mb-6 -mt-10 sm:flex">
              <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
                {room ? "Enter Room" : "Create Room"}
                {room ? (
                  <Image
                    height={8}
                    width={14}
                    src="/images/enterArrow.png"
                    alt="enter room"
                    className="ml-3"
                  />
                ) : (
                  <Image
                    height={8}
                    width={14}
                    src="/images/plus.png"
                    alt="create room"
                    className="ml-3"
                  />
                )}
              </button>
            </div>
            <p className="text-[#05EAFA]">Skills Required</p>
            <div className="grid grid-cols-4 text-xs sm:grid-cols-3 md:grid-cols-4 gap-y-2">
              {" "}
              <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                #C++
              </div>
              <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                #C
              </div>
              <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                #JS
              </div>
              <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                #Java
              </div>
              <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                #Java
              </div>
            </div>
          </div>
        </div>

      {owner ? (
        //Accept Proposals
        <div className="bg-[#0C0634] flex flex-col text-white m-6 rounded-md sm:rounded-xl px-6 py-8 sm:mx-14 sm:my-10 ">
          <div>
            <p className="text-[#05EAFA]">List of Proposals</p>
            <div className="grid grid-cols-1 gap-4 mx-6 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
              {/* card  */}
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
            </div>
          </div>
        </div>
      ) : (
        //Send Proposal
        <div className="bg-[#0C0634] flex flex-col text-white m-6 rounded-md sm:rounded-xl px-6 py-8 sm:mx-14 sm:my-10 ">
          <div>
            <p className="text-[#05EAFA]">Your Proposal</p>
            <textarea
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              value={desc}
              name=""
              id=""
              cols="30"
              rows="4"
              className="w-full placeholder:font-semibold bg-inherit"
              placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            ></textarea>
          </div>
          <div className="flex sm:justify-end justify-center sm:mt-[2rem] mt-[5rem] sm:-mb-3">
            {proposal ? (
              <button
                className="bg-[#E40E82] opacity-20 flex items-center justify-between w-fit  rounded-2xl px-3 py-2 font-medium"
                disabled
              >
                Send Proposal{" "}
                <BsFillArrowRightCircleFill size={20} className="ml-2" />
              </button>
            ) : (
              <button
                onClick={printDesc}
                className="bg-[#E40E82] flex items-center justify-between w-fit  rounded-2xl px-3 py-2 font-medium"
              >
                Send Proposal{" "}
                <BsFillArrowRightCircleFill size={20} className="ml-2" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewIdea;
