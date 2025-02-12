import React, { useRef, FC } from "react";
import { Modal, Button, Image, Avatar } from "antd";
import MoreOutlined from "@ant-design/icons/MoreOutlined";

import { on } from "events";
import AvataUser from "../avatar/avatar";
interface UserInforModalProps {
    UserName: UserPosts;
    isOpen: boolean;
    onClose: () => void
}


export const UserInformationModal: FC<UserInforModalProps> = ({ UserName,isOpen, onClose }) => {
    const [Userpost, setUserpost] = React.useState(UserName);
    
    const [isModalVisible, setIsModalVisible] = React.useState(isOpen);

    return (
        <>
            <Modal
                open={isModalVisible}
                onCancel={() => { setIsModalVisible(false), onClose() }}
                title={null} // Loại bỏ tiêu đề
                footer={null} // Loại bỏ footer
                closable={false} // Ẩn nút đóng mặc định
                centered
                width={380}
            >
                <div className="mt-2 flex justify-between items-center">
                    <div className=" flex justify-start flex-col items-start">
                        <div className="text-black text-[20px] font-bold">
                            {Userpost.fullName}
                        </div>
                        <div className="text-black text-[15px] ">
                            {Userpost.accountName}
                        </div>
                    </div>
                    <div className="w-16 h-16">
                        <AvataUser src={Userpost.avatar} alt={""} />
                    </div>
                </div>
            <div className="mt-1 text-black text-[15px] ">
            {Userpost.title.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
            </div>
            <div className="mt-1  text-[15px] text-[#999999]">
            {Userpost.followers} người theo dõi
            </div>
            <div className="mt-1 w-full ">
            <button className='w-full text-white bg-black  h-9 border rounded-xl  font-bold text-[15px]'>
                  Theo dõi
                </button>
            </div>

            </Modal>
        </>
    )

}