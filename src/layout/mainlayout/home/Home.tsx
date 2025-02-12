import {
  EllipsisOutlined,
  
} from "@ant-design/icons";
import React, { useRef } from "react";
import PostModal from "../../../components/modals/postModal";
import ListPost from "../../../components/singlecomponents/listPost";
import { UserInformationModal } from "../../../components/modals/userInformationModal";

export const Home = () => {
  const data: Posts[] = [
    {
      id: "dasdhasdasd",
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng. \n sadasdasdasd",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
    {
      id: "2",
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
    {
      id: "244",
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
  ];
  return (
    <>
   <UserInformationModal isOpen={true} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }></UserInformationModal>


      <div className="w-full flex justify-center items-center">
        <div className="w-2/3 h-screen flex justify-center items-center flex-col px-6 overflow-hidden">
          <div className="w-full h-[60px] flex justify-between items-center px-4 py-2 relative">
            <h1 className="text-center flex-1 text-lg font-semibold">
              Trang Chủ
            </h1>
            <div className="absolute top-3 right-12 px-[5px] rounded-full text-[18px] text-center bg-white border-solid border cursor-pointer">
              <EllipsisOutlined />
            </div>
          </div>
          <div className="w-full h-full bg-white border rounded-3xl rounded-b-none p-5 overflow-y-scroll">
            <ListPost datas={data} ></ListPost>
          </div> 
        </div>
      </div>
      {/* <ItemLayout /> */}
    </>
  );
};
