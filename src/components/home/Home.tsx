import {
  CommentOutlined,
  EllipsisOutlined,
  HeartFilled,
  HeartOutlined,
  RetweetOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import React, { useRef } from "react";
import PostModal from "../modals/postModal";

export const Home = () => {
  const data = [
    {
      id: 1,
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: [],
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
      id: 2,
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: [],
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

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current as unknown as HTMLDivElement;
    isDragging.current = true;
      container.classList.add("active");
    
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    const container = containerRef.current as unknown as HTMLDivElement;;
    container.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    const container = containerRef.current as unknown as HTMLDivElement;;
    container.classList.remove("active");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return; // Chỉ di chuyển khi đang kéo
    e.preventDefault();
    const container = containerRef.current as unknown as HTMLDivElement;;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 2; // Tăng tốc độ di chuyển
    container.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <PostModal isOpen={true} />


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
            <div className="w-full bg-white">
              {data.map((item) => (
                <div className="px-5 w-full py-3 flex flex-row justify-between border-b border-[#c7c7c7]">
                  <div className="w-10 h-10">
                    <div className="w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center cursor-pointer">
                      <Image
                        width={28}
                        preview={false}
                        src="..\src\assets\share-image\threads.png"
                      ></Image>
                    </div>
                  </div>
                  <div className="w-full ml-2 flex flex-col gap-1">
                    <div className="w-full flex felx-row gap-2 justify-start items-center relative">
                      <div className="text-[#999999]">{item.user.name}</div>
                      <div className="translate-y-[-4px] absolute top-0 right-0 p-1 w-10 rounded-full text-[20px] text-[#999999] text-center hover:bg-[#e9e9e9] cursor-pointer">
                        <EllipsisOutlined />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-[6px] justify-center items-start">
                      <div>
                        <span>Cầu vồng tượng trưng cho hy vọng. </span>
                        <span>Hồ đá xanh - Thành phố Vũng Tàu</span>
                      </div>
                      <div
                        className="image-container gap-2"
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                      >
                        <img
                          src={"../src/assets/share-image/" + "avt.jpg"}
                          alt=""
                          className="image"
                          draggable="false"
                        />
                        <img
                          src={"../src/assets/share-image/" + "avt.jpg"}
                          alt=""
                          className="image"
                          draggable="false"
                        />
                        <img
                          src={"../src/assets/share-image/" + "avt.jpg"}
                          alt=""
                          className="image"
                          draggable="false"
                        />
                      </div>
                    </div>
                    <ul className="w-full h-9 flex flex-row justify-start items-center gap-2 text-lg text-[#555555]">
                      <li className="flex flex-row gap-1 px-3 h-[32px]  hover:bg-[#e9e9e9] rounded-full cursor-pointer">
                        {!item.like.isLiked ? (
                          <HeartOutlined />
                        ) : (
                          <HeartFilled className="text-[#ff3030]" />
                        )}
                        <div>1</div>
                      </li>
                      <li className="flex flex-row gap-1 px-3 h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer">
                        <CommentOutlined />
                        <div>2</div>
                      </li>
                      <li className="px-1 w-[32px] h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer text-center">
                        <RetweetOutlined />
                      </li>
                      <li className="px-1 w-[32px] h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer text-center text-[15px]">
                        <SendOutlined
                          rotate={-30}
                          className="translate-y-[-1px] translate-x-[1px]"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ItemLayout /> */}
    </>
  );
};
