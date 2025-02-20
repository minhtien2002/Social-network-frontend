import React from 'react';
import { User } from '../../../types/userTypes';
import { Modal, Switch } from 'antd';
import AvataUser from '../../../components/avatar/avatar';


interface ChangeInfoProfileProps {
    user?: User;
    isOpen: boolean;
    onClose: () => void
}

const ChangeInfoProfile: React.FC<ChangeInfoProfileProps> = ({ user, isOpen, onClose }) => {
    const [userInfo, setUserInfo] = React.useState<User | null>(user ?? null);
    const [isModalVisible, setIsModalVisible] = React.useState(isOpen);
    const [switchPrivate, setSwitchPrivate] = React.useState(false);
    const onChangePrivate = (checked: boolean) => {
        // setUserInfo({
        //     ...userInfo,
        //     accountPrivated: checked
        // })
    };
    return (
        <>
            <Modal
                open={isModalVisible}
                onCancel={() => { setIsModalVisible(false), onClose() }}
                title={null} // Loại bỏ tiêu đề
                footer={null} // Loại bỏ footer
                closable={false} // Ẩn nút đóng mặc định
                centered
                width={"35%"}
            >
                <div className=' !mx-[-24px] !my-[-12px] px-4  w-[calc(100%+48px)] flex flex-col justify-start gap-2 items-start '>
                    <div className='w-full flex justify-start items-center '>
                        <div className='w-5/6 border-b p-2 pb-4 flex flex-col justify-start items-start'>
                            <div className='font-semibold text-[16px] text-black'>Tên người dùng</div>
                            <div className=' text-[16px]'> {userInfo?.accountName}</div>
                        </div>
                        <div className='w-1/6 h-[60px] flex justify-center items-center '>
                            <div className='w-[50px] h-[50px] '>
                                <AvataUser src={userInfo?.urlAvatar??""} alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center '>
                        <div className='w-full border-b p-2 pb-4 flex flex-col justify-start items-start'>
                            <div className='font-semibold text-[16px]'>Họ tên</div>
                                <div className=' text-[16px] text-[#999999]'>
                                    {userInfo?.fullName}
                                </div>

                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center '>
                        <div className='w-full border-b p-2 pb-4 flex flex-col justify-start items-start'>
                            <div className='font-semibold text-[16px]'>Tiểu sử</div>
                            {userInfo?.title ? (<div className=' text-[16px]'> {userInfo?.title}</div>) : (<>
                                <div className=' text-[16px] text-[#999999]'>
                                    + Thêm tiểu sử
                                </div>
                            </>)}

                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center '>
                        <div className='w-full border-b p-2 pb-4 flex flex-col justify-start items-start'>
                            <div className='font-semibold text-[16px]'>Liên kết</div>
                            {userInfo?.links ? (<div className=' text-[16px]'> {userInfo?.links}</div>) : (<>
                                <div className=' text-[16px] text-[#999999]'>
                                    + Thêm tiểu sử
                                </div>
                            </>)}
                        </div>
                    </div>
                    <div className='w-full flex pb-2  justify-between items-center '>
                        <div className='w-5/6  p-2  flex flex-col justify-start items-start'>
                            <div className='font-semibold text-[16px]'>Trang cá nhân riêng tư
                            </div>
                            <div className=' text-[12px] text-[#999999]'>
                                Nếu chuyển sang chế độ riêng tư, bạn sẽ không thể trả lời người khác trừ khi họ theo dõi bạn.
                            </div>
                        </div>
                        <div className='w-1/6 flex justify-center items-center '>
                            <Switch checked={userInfo?.accountPrivated}
                                onChange={onChangePrivate}
                                className={`   ${switchPrivate ? "!bg-black" : "bg-gray-300"} `}

                            />
                        </div>

                    </div>
                    <div className='w-full'>
                        <button className='w-full mb-3 text-white p-3 px-3 bg-black h-auto border rounded-xl font-bold text-[15px]'>
                            Xong
                        </button>
                    </div>
                </div>

            </Modal>

        </>

    );
};

export default ChangeInfoProfile;