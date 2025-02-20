import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';

interface InputTextModalProps {
    title: string;
    introduction: string;
    typeinput: string;
    isOpen: boolean;
    onSubmit: (output: string) => void;
    onCancel: () => void;
}

const InputTextModal: React.FC<InputTextModalProps> = ({ title, introduction,typeinput, isOpen, onSubmit, onCancel }) => {
    const [titleText, setTitle] = useState(title);
    const [contentText, setContentText] = useState("");

    const [introductionText, setIntroductionText] = useState(introduction);
    const [isModalVisible, setIsModalVisible] = React.useState(isOpen);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputTextarea = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "200px"; // Reset height để tính lại
            textarea.style.height = `${textarea.scrollHeight+2200 }    px`; // Cập nhật chiều cao theo nội dung
            setContentText(textareaRef.current.value)
        }
    };
   

    return (
        <>
            <Modal
                open={isModalVisible}
                onCancel={() => { setIsModalVisible(false), onCancel() }}
                title={null} // Loại bỏ tiêu đề
                footer={null} // Loại bỏ footer
                closable={false} // Ẩn nút đóng mặc định
                centered
                className="post-modal"
                width={"40%"}
                height={"auto"}
            >
                <div className="!mx-[-24px] !my-[-12px] px-4   w-[calc(100%+48px)]  border-b flex justify-between items-center">
                    <Button type="text" onClick={() => { setIsModalVisible(false), onCancel() }} className="text-black text-[15px]">Hủy</Button>
                    <strong className="text-lg">{titleText}</strong>
                    <Button type="text" onClick={() => { setIsModalVisible(false), onSubmit(contentText) }} className="text-black text-[15px]">Xong</Button>
                </div>
                <div className='w-full min-h-[200px]  mt-8'>
                    {typeinput=="textarea"?  ( <textarea
                        ref={textareaRef}
                       // rows={1}
                        onInput={handleInputTextarea}
                        className="overflow-hidden  w-full block focus:outline-none focus:ring-0 resize-none" placeholder="Nhập thông tin "></textarea>):
                        (<>
                        <input type="text"  
                         value={contentText}
                         onChange={(e) => setContentText(e.target.value)}
                        
                        className="overflow-hidden  w-full block focus:outline-none focus:ring-0 resize-none" placeholder="Nhập thông tin " />
                        
                        
                        </>)
                        
                        }
                   
                </div>
                <div className='text-[15px]'>{introductionText}</div>
            </Modal>


        </>
    );
};

export default InputTextModal;