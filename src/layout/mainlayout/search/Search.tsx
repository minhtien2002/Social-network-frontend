import { SearchOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import { Image } from 'antd'
import { User, UserSearch } from '../../../types/userTypes'



const SearchItem: FC<{ item: UserSearch }> = ({ item }) => {
  return (
    <>
      <div className='w-full flex justify-start items-start gap-2 cursor-pointer'>
        <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center cursor-pointer">
          {item.urlAvatar === '' ? ( <Image
            width={28}
            preview={false}
            src={item.urlAvatar}
          ></Image>   ):
          (  <Image
            width={28}
            preview={false}
            src={item.urlAvatar}
          ></Image>)   
            }
          
        </div>
        <div className='flex justify-between items-start w-full border-b pb-3'>
          <div className='flex-col flex justify-start items-start '>
            <span className='text-black font-semibold hover:underline  '>{item.accountName}</span>
            <span className='text-[#999999]'>{item.fullName}</span>
            <span className='text-black my-1'>{item.title}</span>
            <span className='text-[#999999]'>{item.followers.length} người theo dõi</span>
          </div>
          {item.IsFollow === 'follow' ? (
            <button className="py-2 px-6 text-white bg-black border rounded-xl font-bold text-[15px]">
              Theo dõi
            </button>
          ) : item.IsFollow === 'unfollow' ? (
            <button className="py-2 px-6 text-black  border rounded-xl font-bold text-[15px]">
              Hủy theo dõi
            </button>
          ) : (
            <button className="py-2 px-6 text-white bg-black border  rounded-xl font-bold text-[15px]">
              Theo dõi lại
            </button>
          )}

        </div>

      </div>
    </>

  )


}


export const SearchProfile = () => {
  const data :UserSearch[] = [
{
  fullName: 'Tran Thien',
  accountName: 'MinhThien',
  title: '',
  urlAvatar: '../src/assets/share-image/threads.png',
  followers: [],
  IsFollow: 'follow'
},
{
  fullName: 'Minh cac',
  accountName: 'nhuccc',
  title: '',
  urlAvatar: '',
  followers: [],
  IsFollow: 'unfollow'
}

  ]
  return (
    <div className=' w-full flex-col flex justify-center items-center gap-3'>
      <div className='w-full p-3 border rounded-2xl flex justify-start items-center bg-[#FAFAFA] gap-2 '>
        <SearchOutlined className='ml-2 text-base text-[#B8B8B8]' />
        <input type="text" placeholder='Tìm kiếm' className='w-full bg-transparent outline-none' />
      </div>
      <div className='w-full flex-col flex justify-start gap-4 '>
        <div>
          <span className='text-[#999999]'>Gợi ý tìm kiếm</span>
        </div>
          {data.map((item) => (
            <SearchItem item={item}></SearchItem>
          ))}
      </div>


    </div>
  )
}
