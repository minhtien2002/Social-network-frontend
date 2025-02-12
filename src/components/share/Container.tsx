import { EllipsisOutlined } from '@ant-design/icons'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ItemLayout from '../../layout/ItemLayout'
import { Profile } from '../../layout/mainlayout/profile/Profile'

enum title {
  'Dành cho bạn',
  'Tìm kiếm',
  'Hoạt_động',
  'Trang cá nhân',
  'Thread',
}

interface test {
  title: title
  check: string
}

export const Container = () => {

  return (
    <div className='flex flex-row ml-[8%] gap-1'>
      
            <Outlet />
   
    </div>




  )
}
