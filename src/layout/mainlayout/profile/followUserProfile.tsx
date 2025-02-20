import { Modal } from 'antd';
import React, { FC, useEffect } from 'react';
import AvataUser from '../../../components/avatar/avatar';
import { RequestApiUserFollow, UserFollowProfile } from '../../../types/userTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchUserFollow } from '../../../features/users/userThunks';

interface FollowUserProfileProps {
    accountName: string;
    isOpen: boolean;
    onClose: () => void
}

const FollowUserProfile: React.FC<FollowUserProfileProps> = ({ accountName, isOpen, onClose }) => {
    const[apiRequest,setApiRequest]=React.useState<RequestApiUserFollow>({accountName:accountName,type:'Follower',typePrivate:true});
    const dispatch = useDispatch<AppDispatch>();
    const [isModalVisible, setIsModalVisible] = React.useState(isOpen);
    const [activeTab, setActiveTab] = React.useState(0); // 0: Thread, 1: Thread Trả lời, 2: Bài đăng lại
    const data= useSelector((state: RootState) => ({userFollows: state.users.userFollow, loading: state.users.loading,error: state.users.error}));
    useEffect(() => {
        dispatch(fetchUserFollow(apiRequest)).then(x=>console.log(x.payload));
        console.log(data);
    }, [accountName]);
    return (
        <>
            <Modal
                open={isModalVisible}
                onCancel={() => { setIsModalVisible(false), onClose() }}
                title={null} // Loại bỏ tiêu đề
                footer={null} // Loại bỏ footer
                closable={false} // Ẩn nút đóng mặc định
                centered
                width={"39%"}
                
              
            >
                <div className='w-[calc(100%+48px)] h-auto !mx-[-24px] !my-[-8px] !pb-[20px] ' >
                    <div className='flex justify-start items-center '>
                        {["Nguời theo dõi", "Đang theo dõi"].map((tab, index) => (
                            <button
                                key={index}
                                className={` w-2/4 flex  items-center justify-center text-[15px] font-semibold  flex-col pb-2
            ${activeTab === index ? "text-black border-b border-black" : "text-[#999999]"}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span>{tab}</span>
                                {index == 0 ? <span className='text-[12px]'>{data.userFollows.length}</span> : <span className='text-[12px]'>4</span>}

                            </button>
                        ))}
                    </div>
                    <div className='w-full flex flex-col gap-1 justify-start items-start mt-4 mx-7'>
                    {data.userFollows.map((item, index) => (
                        <UserFollowProfileItem item={item} />
                    ))}
                    </div>
                </div>


            </Modal>
        </>
    )
};
const UserFollowProfileItem: FC<{ item: UserFollowProfile }> = ({ item })  => (
    <div className='w-full flex flex-row gap-2 justify-start items-star cursor-pointer'>
        <div className='w-10 h-10'>
            <AvataUser src={item.src} alt={item.accountName} />
        </div>
        <div className='flex justify-between items-center w-[80%] border-b pb-4'>
            <div className='flex flex-col justify-start'>
                <div className='text-[15px] font-semibold cursor-pointer hover:underline'>{item.accountName}</div>
                <div className='text-[15px] text-[#999999]'>{item.fullName}</div>
            </div>
            <div>
                <button className=' text-white p-2 px-3 bg-black h-auto border rounded-xl font-bold text-[15px]'>
                    Theo dõi lại
                </button>
            </div>
        </div>
    </div>
);
export default FollowUserProfile;