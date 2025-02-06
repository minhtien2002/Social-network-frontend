import { AppstoreOutlined, EllipsisOutlined, InstagramOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Anchor } from 'antd'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { User } from '../../types/userTypes';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Thread',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Thread Trả lời',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Bài Đăng lại',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  
  },
];
const type: 'private' | 'public' = 'private';
const userInfo :  User={
  fullName: 'Trần Thiện',
  accountName: 'thienzn',
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
  return (
    <>
      <div className='flex w-full flex-col gap-4'>
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
          <div className='text-[#999999] text-[15px]'>
            {userInfo.followers.length} người theo dõi
          </div>
          <div>
          <InstagramOutlined className='text-[25px] cursor-pointer' />
          </div>
        </div>
        <div> 
         {!type  ? (
            <button className='w-full h-9 border rounded-xl  font-bold text-[15px]'>
            Chỉnh sửa trang cá nhân 
         </button>
         ):(
          <>
          <div className='flex gap-4'> 
            <button className='w-2/4 text-white bg-black  h-9 border rounded-xl  font-bold text-[15px]'>
            Theo dõi
          </button>
          <button className='w-2/4 h-9 border rounded-xl  font-bold text-[15px]'>
          Nhắc đến
        </button>
        </div>
        </>
          )
          }
        
          
        </div>
        <div className='-mx-5 w-[calc(100%+2,5rem)] flex border-b   '>
        <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Thread</button>
  <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Thread Trả lời</button>
  <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Bài đăng lại</button>
        </div>
      </div>

    </>
  )
}
