import { Outlet } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'

export const AuthLayout = () => {
  return (
    <div className="desktop:w-full relative flex flex-col justify-center items-center h-screen overflow-y-hidden">
      <div className="mobile:flex hidden absolute top-0 z-0">
        <img className="overflow-hidden w-[1366px] h-[384px] object-cover" src="..\src\assets\share-image\bg_login.png" alt="backgound threads" />
      </div>
      <div className="mobile:hidden w-full flex py-3 h-[60px] box-border absolute top-0 justify-center items-center">
        <div className="absolute left-0 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        <div>
          <img src="..\src\assets\share-image\threads.png" className="w-[30px] h-[30px]" alt="Logo Threads" />
        </div>
      </div>

      <Outlet></Outlet>

      <div className=" overflow-y-hidden px-4 w-full flex h-[70px] absolute bottom-0 text-center justify-center items-center text-[#999999] text-[12px]">
        <ul className="flex flex-wrap justify-center ">
          <li className="ml-3"><span>© 2024</span></li>
          <li className="ml-3 hover:underline"><a href="#"><span>Điều khoản của Threads</span></a></li>
          <li className="ml-3 hover:underline"><a href="#"><span>Chính sách quyền riêng tư</span></a></li>
          <li className="ml-3 hover:underline"><a href="#"><span>Chính sách Cookie</span></a></li>
          <li className="ml-3 hover:underline"><a href="#"><span>Báo cáo sự cố</span></a></li>
        </ul>

      </div>

      <div className='absolute bottom-0 right-0  w-32 h-32 flex flex-col justify-center items-center'>
        <span className='absolute top-0 text-[#999999]'>Đăng ký</span>
        <a href='/register' className='w-20 h-16 hover:w-[94px] hover:h-[78px] border-2 rounded-xl flex justify-center items-center text-3xl hover:text-4xl'>
            <PlusOutlined />
        </a>
      </div>
    </div>
  )
}