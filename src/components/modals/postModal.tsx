import React, { useRef, FC } from "react";
import { Modal, Button, Image } from "antd";
import MoreOutlined from "@ant-design/icons/MoreOutlined";
import ChooseFile from "../icons/chooseFile";
import GifIcon from "../icons/gifIcon";
import { on } from "events";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void 
}

const PostModal: FC<PostModalProps> = ({ isOpen ,onClose}) => {
    const [isModalVisible, setIsModalVisible] = React.useState(isOpen);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
 
    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // Reset height để tính lại
            textarea.style.height = `${textarea.scrollHeight}px`; // Cập nhật chiều cao theo nội dung
        }
    };
    const handleClick = () => {
        if (textareaRef.current) {
          alert(`Giá trị nhập vào: ${textareaRef.current.value}`);
        }
      };
    return (
        <div>

            <Modal
                open={isModalVisible}
                onCancel={() => {setIsModalVisible(false),onClose()}}
                title={null} // Loại bỏ tiêu đề
                footer={null} // Loại bỏ footer
                closable={false} // Ẩn nút đóng mặc định
                centered
                className="post-modal"
            >
                {/* Nội dung tùy chỉnh */}
                <div className=" border-b flex justify-between items-center">
                    <Button type="text" onClick={() => {setIsModalVisible(false),onClose()}} className="text-black text-lg">Hủy</Button>
                    <strong className="text-lg">Thread mới</strong>
                    <MoreOutlined className="text-xl cursor-pointer" />
                </div>
                <div className="p-2 pt-4 gap-3  flex justify-start items-start w-full">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center cursor-pointer">
                        <Image
                            width={28}
                            preview={false}
                            src="..\src\assets\share-image\threads.png"
                        ></Image>
                    </div>
                    <div className="w-full flex flex-col ">
                        <div className="text-black text-[15px] font-semibold">
                            thien_43z
                        </div>
                        <div className="accountname w-full">
                            <textarea
                                ref={textareaRef}
                                rows={1}
                                onInput={handleInput}
                                className="overflow-hidden h-auto w-full block focus:outline-none focus:ring-0 resize-none" placeholder="Nhập tên tài khoản"></textarea>
                        </div>
                        <div className="mt-2 flex justify-start items-center w-full gap-3">
                       <ChooseFile  className="h-6 w-6 text-gray-500"></ChooseFile>
                       <GifIcon  className="h-6 w-6 text-gray-500"></GifIcon>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="mt-2 flex items-center justify-between">
                        <div className="w-full">
                        <select className=" border-0 bg-transparent w-auto focus:outline-none focus:ring-0 resize-none appearance-none text-gray-500">
                            <option  value="1">Bất kỳ ai cũng có thể trả lời và trích dẫn</option>
                            <option value="2">Private</option>
                        </select>
                        </div>
                        <div>
                            <button onClick={handleClick} className="flex justify-center border items-center  mr-3 text-black font-semibold rounded-md text-[15px] " style={{border: "#rgba(0, 0, 0, 0.15)"}}>
                                Đăng
                            </button>
                        </div>
                        </div>
            </Modal>
        </div>
    );
};

export default PostModal;