import { AppstoreOutlined, EllipsisOutlined, InstagramOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import type { MenuProps } from 'antd';
import { User } from '../../../types/userTypes';
import PostsProfile from './postsProfile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchUserInfo } from '../../../features/users/userThunks';
import { useParams } from 'react-router-dom';
import { set } from 'react-hook-form';

 

const userInf1: User = {
  fullName: '',
  accountName: '',
  email: '',
  createAt: new Date(),
  title: '',
  links: '',
  active: false,
  accountPrivated: false,
  accountConfirmed: false,
  urlAvatar: '',
  followers: [],
  followees: []
}
export const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { accountname } = useParams();
  const [userInfo, setUserInfo] = React.useState<User>(userInf1);
  const [type, setType] = React.useState<'private' | 'public' | undefined>('private');
  const [typeFollow, setTypeFollow] = React.useState<number>(0);
  const [activeTab, setActiveTab] = React.useState(0); // 0: Thread, 1: Thread Trả lời, 2: Bài đăng lại
  const[posts,setPosts]= React.useState<any[]>([]);
  const user = useSelector((state: RootState) => state.users.dataInfo);
  useEffect(() => {
    if (accountname) {
      dispatch(fetchUserInfo(accountname))
    }
  }, [accountname, dispatch])
  useEffect(() => {
    if (user) {
      console.log(user); // Kiểm tra giá trị user
      const data: User = {
        fullName: user.infoUser.fullName,
        accountName: user.infoUser.accountName,
        email: user.infoUser.email,
        createAt: user.infoUser.createAt,
        title: user.infoUser.title,
        links: user.infoUser.links,
        active: user.infoUser.active,
        accountPrivated: user.infoUser.accountPrivated,
        accountConfirmed: user.infoUser.accountConfirmed,
        urlAvatar: user.infoUser.urlAvatar,
        followers: user.infoUser.followers,
        followees: user.infoUser.followees,
      };
      const userPosts:UserPosts = {
        id: user.infoUser.id,
        accountName: user.infoUser.accountName,
        fullName: user.infoUser.fullName,
        title: user.infoUser.title,
        followers: user.infoUser.followers.length,
        avatar: user.infoUser.urlAvatar,
      }

      setPosts(user.postViewModelEvent);
      updateUserForAllPosts(userPosts);
      setUserInfo(data);
      setType(user.type);
      setTypeFollow(user.isFollow);
    }
  }, [user]); // Chạy lại khi user thay đổi

  const updateUserForAllPosts = (newUser: any) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => ({ ...post, user: newUser }))
    );
  };
  return (
    <>

      <div className='flex w-full flex-col gap-3 h-auto'>
        <div className='flex justify-between items-center '>
          <div className='flex items-start justify-start flex-col'>
            <h1 className='font-bold text-black text-[25px]'>
              {userInfo.fullName}
            </h1>
            <div className=' text-[15px]'>
              {userInfo.accountName}
            </div>
          </div>
          <div className='rounded-full bg-black w-20 h-20 avatar'>

          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-[#999999] text-[15px] cursor-pointer hover:underline'>
            {userInfo.followers.length} người theo dõi
          </div>
          <div>
            <InstagramOutlined className='text-[25px] cursor-pointer' />
          </div>
        </div>
        <div>
          {type == 'private' ? (
            <button className='w-full h-9 border rounded-xl  font-bold text-[15px]'>
              Chỉnh sửa trang cá nhân
            </button>
          ) : (
            <>
              <div className='flex gap-4'>
                {typeFollow === 0 ? (
                 <button className='w-2/4 text-white bg-black  h-9 border rounded-xl  font-bold text-[15px]'>
                 Theo dõi
               </button>
                ) : typeFollow === 1 ? (
                  <button className='w-2/4 h-9 border rounded-xl  font-bold text-[15px]'>
                  Đang theo dõi
                </button>
                ) : (
                  <button className='w-2/4 text-white bg-black  h-9 border rounded-xl  font-bold text-[15px]'>
                  Theo dõi lại
                </button>
                )
                }
                <button className='w-2/4 h-9 border rounded-xl  font-bold text-[15px]'>
                  Nhắc đến
                </button>
              </div>
            </>
          )
          }

        </div>
        <div className="-mx-5 w-[calc(100%+2.5rem)] flex border-b">
      {["Thread", "Thread Trả lời", "Bài đăng lại"].map((tab, index) => (
        <button
          key={index}
          className={`flex-1 flex items-center justify-center text-[15px] font-semibold p-4 transition-all
            ${activeTab === index ? "text-black border-b border-black" : "text-[#999999]"}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
   <div className=' w-full h-auto min-h-[200px]'>
        {activeTab === 0 &&  <PostsProfile posts={posts}></PostsProfile>}
        {activeTab === 1 && <p>Content for Thread Trả lời</p>}
        {activeTab === 2 && <p>Content for Bài đăng lại</p>}
    </div>

      </div> 

    </>
  )
}
