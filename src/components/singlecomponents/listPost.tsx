import React, { FC, useRef, useState } from 'react';
import { Image } from 'antd';
import { CommentOutlined, EllipsisOutlined, HeartFilled, HeartOutlined, RetweetOutlined, SendOutlined } from '@ant-design/icons';
import Avatar from '../avatar/avatar';
import Item from 'antd/es/list/Item';
import { useNavigate } from 'react-router-dom';
import AvataUser from '../avatar/avatar';
import { UserInformationModal } from '../modals/userInformationModal';


interface ListPostProps {
    datas: Posts[];
}

const ListPost: FC<ListPostProps> = ({ datas }) => {


    return (<>
        <div className="w-full ">
            {datas.map((item, itemindex) => (
                <ItemPost key={item.id} item={item} />
            ))}
        </div>
    </>);

};



const ItemPost: FC<{ item: Posts }> = ({ item }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isClickedAvatar, setIsClickedAvatar] = useState(false);
    const [UserInformation, setUserInformation] = useState<UserPosts>();
    const navigate = useNavigate();
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
    const handleOnClick = (accountName: string, idpost: string) => {
        navigate(accountName + "/post/" + idpost);
        const pathParts = window.location.pathname.split("/").filter(Boolean); // Tách đường dẫn thành mảng các phần tử không rỗng
        const account = pathParts.length > 0 ? pathParts[0] : "";
        if (account) {
            navigate(`/${accountName}/post/${idpost}`); // Nếu có accountName, thêm vào URL
        } else {
            navigate(`/post/${idpost}`); // Nếu không có accountName, chỉ điều hướng đến /post/:id
        }
    }
    const handleOnClickAccount = (event: React.MouseEvent<HTMLSpanElement>, accountName: string) => {
        event.stopPropagation();
        navigate(accountName);
    }
    const handleOnClickAvatar = (event: React.MouseEvent<HTMLDivElement>, User: UserPosts) => {
        event.stopPropagation();
        setUserInformation(User);
        setIsClickedAvatar(true);
    }
    return (
        <>
            {UserInformation && isClickedAvatar && (
                <UserInformationModal UserName={UserInformation} isOpen={isClickedAvatar} onClose={function (): void {
                    setIsClickedAvatar(false)
                    setUserInformation(undefined)
                }}></UserInformationModal>
            )}

            <div key={item.id} onClick={() => handleOnClick(item.user.accountName, item.id)} className="cursor-pointer px-5 w-full py-3 flex flex-row justify-between border-b border-[#c7c7c7]">
                <div className="w-10 h-10">
                    <div
                        onClick={(event) => handleOnClickAvatar(event, item.user)}
                        className="w-9 h-9  flex justify-center items-center cursor-pointer">
                        <AvataUser src={item.user.avatar} alt={''} ></AvataUser>
                    </div>
                </div>
                <div className="w-full ml-2 flex flex-col gap-1">

                    <div className="w-full flex felx-row gap-2 justify-start items-center relative">
                        <div className='flex justify-start items-center gap-1 relative'>
                            <span className="text-[black] hover:underline  font-semibold text-[15px]  "

                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={(event) => handleOnClickAccount(event, item.user.accountName)}
                            >
                                {item.user.accountName}
                            </span>
                            <span className='text-[#999999] text-[15px]'>
                                24 giờ
                            </span>
                            {isHovered && (
                                <div className=" z-40 absolute w-72 top-5 -left-4 mt-2 p-2    bg-white border text-white rounded-xl shadow-lg">
                                    <div className="mt-2 flex justify-between items-center">
                                        <div className=" flex justify-start flex-col items-start">
                                            <div className="text-black text-[20px] font-bold">
                                                {item.user.fullName}
                                            </div>
                                            <div className="text-black text-[15px] ">
                                                {item.user.accountName}
                                            </div>
                                        </div>
                                        <div className="w-16 h-16">
                                            <AvataUser src={item.user.avatar} alt={""} />
                                        </div>
                                    </div>
                                    <div className="mt-1 text-black text-[15px] ">
                                        {item.user.title.split("\n").map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </div>
                                    <div className="mt-1  text-[15px] text-[#999999]">
                                        {item.user.followers} người theo dõi
                                    </div>
                                    <div className="mt-1 w-full ">
                                        <button className='w-full text-white bg-black  h-9 border rounded-xl  font-bold text-[15px]'>
                                            Theo dõi
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

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
                        {item.media.length > 0 ? (
                            <div
                                className="image-container gap-2 cursor-grab"
                                ref={scrollRef}
                                data-id={item.id}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseUp}
                                onMouseUp={handleMouseUp}
                            >

                                {item.media.map((media, index) => (
                                    media.mediaType === 0 ? (
                                        <img
                                            key={index}
                                            src={media.url}
                                            alt={media.url}
                                            className="w-[120px] h-[200px]  object-cover"
                                        />
                                    ) : <video key={index} src={media.url}  ></video>
                                ))}
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
        </>
    );
};
export default ListPost;