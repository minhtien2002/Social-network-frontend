import React, { FC, useRef, useState } from 'react';
import { Image } from 'antd';
import { CommentOutlined, EllipsisOutlined, HeartFilled, HeartOutlined, RetweetOutlined, SendOutlined } from '@ant-design/icons';
import Avatar from '../avatar/avatar';

interface ListCommentProps {
    datas: Comments[];
}
export const ListComment: FC<ListCommentProps> = ({ datas }) => {


    return (<>
        <div className="w-full ">
            {datas.map((item, itemindex) => (
                <ItemComment key={item.id} item={item} />
            ))}
        </div>
    </>);

};

const ItemComment: FC<{ item: Comments }> = ({ item }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;

        // Kiểm tra đúng post nào đang kéo


        isDragging.current = true;
        startX.current = e.clientX;
        scrollLeft.current = scrollRef.current.scrollLeft;

        document.body.style.userSelect = "none"; // Chặn chọn text khi kéo
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        const deltaX = e.clientX - startX.current;
        scrollRef.current.scrollLeft = scrollLeft.current - deltaX;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.body.style.userSelect = "auto"; // Cho phép chọn text lại
    };

    return (

        <div key={item.id} className=" w-full py-3 flex flex-row justify-between border-b border-[#c7c7c7]">
            <div className="w-10 h-10">
                <div className="w-9 h-9  flex justify-center items-center cursor-pointer">
                    <Avatar src={item.user.avatar} alt={''} ></Avatar>  
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
                        {item.content.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
                    </div>
                    {item.media.image.length > 0 || item.media.video.length > 0 ? (
                        <div
                            className="image-container gap-2 cursor-grab"
                            ref={scrollRef}
                            data-id={item.id}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseUp}
                            onMouseUp={handleMouseUp}
                        >

                            {item.media.video.length > 0 ? (
                                item.media.video.map((video, index) => (
                                    <video key={index} controls className="video">
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ))
                            ) : (
                                item.media.image.map((image, index) => (
                                    <img key={index} src={image} alt="" className="image" draggable="false" />
                                ))
                            )}
                        </div>
                    ) : null
                    }
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

    );
};