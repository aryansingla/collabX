import AuthenticatedUser from "@/components/Auth/AuthenticatedUser";
import RoomModal from "@/components/RoomModal";
import RoomProposalCard from "@/components/RoomProposalCard/RoomProposalCard";
import { DAOROOM_CONTRACT_ADDRESS } from "@/constants";
import {
  ConnectWallet,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import {
  BsArrowRightSquareFill,
  BsPlusCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePersonRemove } from "react-icons/md";

const daoRoom = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [option, setOption] = useState("tasks");
  const [taskOption, setTaskOption] = useState("To Do");
  const [clickHam, setClickHam] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [createProposal, setCreateProposal] = useState({
    address: "address",
    desc: "",
  });
  const router = useRouter();
  const { contract: DAOContract } = useContract(DAOROOM_CONTRACT_ADDRESS);
  const { data: roomData, isLoading: isLoadingRoom } = useContractRead(
    DAOContract,
    "getProjectRoom",
    [router.query.id]
  );

  console.log("ROOMDATA", roomData);

  const changeHam = () => {
    setClickHam(!clickHam);
  };
  const changeYours = () => {
    setShowYours(!showYours);
  };
  const changeOthers = () => {
    setShowOthers(!showOthers);
  };
  const openNav = () => {
    setPhonenav(!phonenav);
  };

  const openModal = () => {
    setModalClick(!modalClick);
  };
  console.log(isLoadingRoom);

  if (isLoadingRoom) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 text-xl text-white">
        <AuthenticatedUser />
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }

  return (
    <div className="relative container1">
      <RoomModal
        openModal={openModal}
        modalClick={modalClick}
        createProposal={createProposal}
        setCreateProposal={setCreateProposal}
      />
      <div className="navbar">
        <div className="mt-2 mb-5 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img sm:flex justify-start items-center sm:w-[35%]">
            <AiOutlineLeft
              className="text-[#fff] mt-2 mb-1 text-2xl cursor-pointer"
              onClick={() => router.back()}
            />
            <GiHamburgerMenu
              onClick={changeHam}
              size={25}
              className="mt-1 mr-1 cursor-pointer"
              color="white"
            />
            <p className="text-[#fff] text-2xl">{roomData?.[1]}</p>
          </div>
          <div className="flex items-center">
            <ConnectWallet
              style={{
                transform: "scale(0.8)",
              }}
              theme="light"
              btnTitle="Connect Wallet"
            />
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
        <div className="flex flex-row items-center justify-between w-full m-1 sm:hidden">
          <div className="flex p-3">
            <AiOutlineLeft
              onClick={changeHam}
              className="text-[#fff] mt-2 text-3xl cursor-pointer mr-2"
            />
            <Image
              height={48}
              width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
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
      {/* opennedNav in phn */}
      {phonenav && (
        <div className="relative z-10 w-full ">
          <ul className="absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]">
            <Link href="/allProfiles">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">
                Profiles
              </li>
            </Link>
            <Link href="/projectIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">Ideas</li>
            </Link>
            <Link href="/yourIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black">
                Showcases
              </li>
            </Link>
          </ul>
        </div>
      )}

      <div className=" h-fit">
        <div className="relative z-0 min-h-full">
          {/* desktop view  */}
          <div className=" roomDesktopView hidden md:flex flex-row w-[95%] m-auto justify-around">
            <div className="flex taskPortion w-[70%] text-white pr-10">
              <div className="heading1 w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Todo
                </div>
                <div className=""></div>
              </div>
              <div className="heading1 w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  In Progress
                </div>
                <div className=""></div>
              </div>
              <div className="heading1 w-[30%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Completed
                </div>
                <div className=""></div>
              </div>
              <div className="heading1 w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Abondoned
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="proposalPortion flex flex-col w-[35%] bg-[#01002A] p-4">
              <div className="heading4 text-[#06dbee] text-lg font-semibold">
                All Proposals
              </div>
              <div>
                {roomData?.proposals.map((ele, idx) => (
                  <RoomProposalCard key={idx} prop={ele} />
                ))}
              </div>

              <div className="z-10 flex justify-end mt-2 contibutorBoxPlusIcon">
                <BsPlusCircleFill
                  onClick={openModal}
                  color="white"
                  size="40"
                  className="items-end cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* phone view  */}
          <div className="roomOptions flex m-auto w-[90%] text-[#fff] justify-around md:hidden">
            <div
              className="option1 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634] cursor-pointer"
              onClick={() => {
                setOption("tasks");
              }}
            >
              Tasks
            </div>
            <div
              className="option2 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634] cursor-pointer"
              onClick={() => {
                setOption("proposal");
              }}
            >
              All Proposals
            </div>
          </div>

          <div className="mobileViewRoom md:hidden">
            {option === "tasks" ? (
              <>
                <div className="optionName text-[#fff]  text-center">
                  {taskOption}
                </div>
                <div className="flex flex-col mt-5 tasksOptions">
                  <div className="flex flex-row justify-between taskOption">
                    <div
                      className="colorBox bg-[#fff] text-[#fff] w-[5%] rounded-r-lg"
                      onClick={() => {
                        setTaskOption("To Do");
                      }}
                    >
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("In Progress");
                    }}
                  >
                    <div className="colorBox bg-[#6ab6fc] text-[#6ab6fc] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("Completed");
                    }}
                  >
                    <div className="colorBox bg-[#94ffac] text-[#94ffac] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("Abondoned");
                    }}
                  >
                    <div className="colorBox bg-[#fe7575] text-[#fe7575] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full m-auto proposalList">
                  {roomData?.proposals.map((ele, idx) => (
                    <RoomProposalCard key={idx} prop={ele} />
                  ))}
                  <div className="z-10 flex justify-end mr-2 contibutorBoxPlusIcon">
                    <BsPlusCircleFill
                      onClick={openModal}
                      color="white"
                      size="50"
                      className="items-end"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* go back section  */}

        {clickHam && (
          <div className="z-10 w-full h-screen absolute newProposal p-6 top-0 bg-[rgba(0,0,0,0.67)] backdrop-blur-md flex flex-col md:p-6 md:pb-10">
            <div className="flex justify-between w-full p-2">
              <div className="flex items-center">
                {" "}
                <AiOutlineLeft
                  onClick={changeHam}
                  className="text-[#fff] mt-2 mr-2 text-2xl cursor-pointer mb-2"
                />{" "}
                <p className="hidden text-xl text-white sm:block"> Go Back</p>
              </div>
              <div className="flex items-center">
                <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
                  <Image
                    height={20}
                    width={20}
                    src="/images/symbol.png"
                    alt="chain"
                    className="sm:mr-2 "
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
            <div className="projectIdeaDetails md:w-[20%]">
              <div className="heading4 text-[#06dbee] text-xl font-semibold">
                {roomData?.[1]}
              </div>
              <div className="projectIdeaText text-[#fff] text-sm">
                <p className="mt-4">{roomData?.[2]}</p>
              </div>
              <div className="contributorsBox border-solid border-[1px] border-white p-4 mt-3">
                <div className="heading4 text-[#06dbee] text-xl font-semibold">
                  Contributors
                </div>
                <div className="mt-3 contributorsList">
                  {roomData?.[6]?.map((ele, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between mt-3 contributor"
                    >
                      <div className="flex contributorDetails">
                        <div className="contributorImage w-[20%]">
                          <Image
                            height={48}
                            width={48}
                            src="/images/avatar.png"
                            alt="avatar"
                            className=""
                          />
                        </div>
                        <div className="contributorName text-[#fff] pl-3">
                          <p>{ele?.[0].substring(0, 6)}...</p>
                        </div>
                      </div>
                      <div className="threeDotIcon">
                        {/* <BsThreeDotsVertical color="white" size={30} /> */}
                        <MdOutlinePersonRemove
                          color="white"
                          size={27}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contibutorBoxPlusIcon absolute right-4 mt-[-10px] md:hidden cursor-pointer">
                <BsPlusCircleFill color="white" size="50" />
              </div>

              <div className="mt-20 leaveAndComplete">
                <div className="leaveButtonContainer text-center bg-[#fff]">
                  <div className="leaveRoomButton flex justify-center bg-[#fff] p-2 w-[95%] cursor-pointer m-auto">
                    <div className="font-bold leaveText">Leave Room</div>
                    <div className="leaveIcon">
                      <BsArrowRightSquareFill size={30} className="pl-3 " />
                    </div>
                  </div>
                </div>
                <div className="completeButtonContainer mt-3 text-center border-solid border-[1px] border-[#05ff00]">
                  <div className="p-2 m-auto cursor-pointer leaveRoomButton">
                    <div className="leaveText font-semibold text-[#05ff00]">
                      Mark Project as Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newProposalBox">
              <div className="absolute justify-between hidden p-6 createProposalOption md:flex right-3 bottom-4 ">
                <div className="createProposalText text-[#fff] text-2xl p-2">
                  <p>Create New Proposal</p>
                </div>
                <div className="contibutorBoxPlusIcon">
                  <BsPlusCircleFill
                    onClick={openModal}
                    color="white"
                    size="50"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default daoRoom;