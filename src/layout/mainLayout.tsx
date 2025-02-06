import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, redirect, useNavigate, Outlet, NavLink } from 'react-router-dom';
import { HeartOutlined, HomeOutlined, InstagramOutlined, MenuOutlined, PushpinOutlined, SearchOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const navBarActive = ({isActive} : any) => {
  return isActive ? 'px-4 py-3 rounded-xl bg-slate-200'
    : 'px-4 py-3 rounded-xl hover:bg-slate-200 '
}

export const MainLayout = () => {

const [accountName, setAccountName] = React.useState("");
useEffect(() => {
  let storedAccountName = localStorage.getItem('accountName');
  if (!storedAccountName) {
    storedAccountName = 'thien-zn';
  }
  setAccountName(storedAccountName);
}, []);

  return (
    <div className='bg-[#fff] h-screen'>
      <div className='w-[72px]  h-full fixed top-0 left-0 z-50 flex flex-col justify-between items-center'>
        <div className='mt-6'>
          <InstagramOutlined className='text-4xl cursor-pointer' />
        </div>
        <ul className='flex flex-col gap-6 text-[24px]'>
          <li><NavLink to="" className={navBarActive}><HomeOutlined /></NavLink></li>
          <li><NavLink to="search" className={navBarActive}><SearchOutlined /></NavLink></li>
          <li><NavLink to="activity" className={navBarActive}><HeartOutlined /></NavLink></li>
          <li><NavLink to={accountName} className={navBarActive}><UserOutlined /></NavLink></li>
          <li><NavLink to="shop" className={navBarActive}><ShopOutlined /></NavLink></li>
        </ul>
        <ul className='mb-6 flex flex-col gap-5 items-center text-[24px]'>
          <li><a href="" className='opacity-40 hover:opacity-100'>
            <PushpinOutlined /></a></li>
          <li><a href="" className='opacity-40 hover:opacity-100'>
            <MenuOutlined /></a></li>
        </ul>
      </div>

      <Outlet></Outlet>

    </div>

  )
}

function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
