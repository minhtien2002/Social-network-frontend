import { Checkbox } from 'antd';
import React, { useState } from 'react'

var style_input: string = "w-full mb-2 p-4 text-[15px] bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50";

interface LoginState {
  lastName: string;
  firstName: string;
  userName: string;
  accountName: string,
  password: string;
  email: string
  error?: string | null;
}

const initialState: LoginState = {
  lastName: '',
  firstName: '',
  userName: '',
  accountName: '',
  password: '',
  email: '',
  error: null
};

// Hàm giả lập gọi API


export const Register = () => {

  

  const [state, setState] = useState<LoginState>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, error: null });

    const loginData = {
      fullName: state.lastName + ' ' + state.firstName,
      userName: state.userName,
      accountName: state.accountName,
      password: state.password,
      email: state.email,
    };

  };
  return (

    <div className="z-[1] min-w-[418px] h-auto p-6 mobile:mt-16 flex flex-col justify-center items-center  border-inherit rounded-lg">
      <span className="w-full font-bold mb-4 text-center">Đăng ký tài khoản Threads</span>
      <form onSubmit={handleSubmit} className="max-w-96">
        <div className='w-full flex flex-row justify-start  text-[15px]'>
          <input name='lastName' value={state.lastName} onChange={handleInputChange} className='w-[50%] mr-4 mb-2 p-4 bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50' type='text' placeholder='Họ' />
          <input name='firstName' value={state.firstName} onChange={handleInputChange} className='w-[50%] mb-2 p-4 bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50' type='text' placeholder='Tên' />
        </div>
        <input className={style_input} name="userName" value={state.userName} onChange={handleInputChange} type="text" placeholder="Tên tài khoản" />
        <input className={style_input} name="accountName" value={state.accountName} onChange={handleInputChange} type="text" placeholder="Tên người dùng" />

        <input className={style_input} name="password" value={state.password} onChange={handleInputChange} type="password" placeholder="Mật khẩu" />
        <input name='email' value={state.email} onChange={handleInputChange} className={style_input} type='email' placeholder='Email' />
        <div className='mb-2 '>
          <Checkbox id='checkBoxRegister' required />
          <label className='ml-2' htmlFor="checkBoxRegister">Đồng ý với các <span className='text-sky-600 hover:underline hover:cursor-pointer'>điều khoản</span> sau.</label>
        </div>
        <input className="w-full text-center bg-black rounded-xl cursor-pointer hover:text-opacity-50  p-4 font-bold text-white disabled:opacity-75" type="submit" value='Đăng nhập' />
      </form>

    </div>
  )
}
