import {
  EllipsisOutlined,
  
} from "@ant-design/icons";
import React, { useRef } from "react";
import ListPost from "../../../components/singlecomponents/listPost";
import FollowUserProfile from "../profile/followUserProfile";
import ChangeInfoProfile from "../profile/changeInfoPorfile";
import InputTextModal from "../../../components/modals/inputTextModal";

export const Home = () => {
  const data: Posts[] = [
    {
      id: "d",
      user: {
        id: "0",
        accountName: "thienxz",
        avatar: "",
        fullName: "",
        title: "",
        followers: 0
      },
      content: "",
      timePost: "",
      media: [],
      like:{
        id: 0,
        userid: 0,
        isLiked: false
      },
      comment: 0,
      retweet: 0,
      send: 0
    },
    {
      id: "d",
      user: {
        id: "0",
        accountName: "thienxz",
        avatar: "",
        fullName: "Tranminhthien",
        title: "",
        followers: 0
      },
      content: "sadasdsa",
      timePost: "",
      media:[],
      like:{
        id: 0,
        userid: 0,
        isLiked: false
      },
      comment: 0,
      retweet: 0,
      send: 0
    }
  ];
  return (
    <>
  
<InputTextModal title={"Chỉnh sửa thông tin"} introduction={""} typeinput={"text"} isOpen={true} onSubmit={function (output: string): void {
       console.log(output);
      } } onCancel={function (): void {
        throw new Error("Function not implemented.");
      } } />

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
