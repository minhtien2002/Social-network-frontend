import { Alert } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import useLocalStorage from "../share/useLocalStorage";
import { profile } from "console";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { fetchLoginAccount } from "../../features/loginAccounts/loginThunks";
import { Account } from "../../types/loginTypes";

var style_input: string = "w-full mb-2 p-4 text-[15px] bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50";

interface dataLogin {
  user: string;
  password: string;
  message?: string | null;
  status?: 'success' | 'info' | 'warning' | 'error' | undefined;
}

const initialState: dataLogin = {
  user: '',
  password: '',
  message: null,
  status: undefined,
};


export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const [state, setState] = useState<dataLogin>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, message: null, status: undefined })
    const loginData:Account = {
      account: state.user,
      password: state.password
    };
   
    const result = (await dispatch(fetchLoginAccount(loginData)));
    console.log(result);
    if(result.meta.requestStatus !== 'rejected'){
      setState({ ...state, message: 'Đăng nhập thành công', status: 'success' });
      localStorage.setItem('token', result.payload);
      navigate('/');
     }else{
      setState({ ...state, message: 'Đăng nhập thất bại', status: 'error' });
     }
  };

  return (
    <>
      <div className="z-[1] min-w-[418px] h-auto p-6 mobile:mt-16 flex flex-col justify-center items-center  border-inherit rounded-lg">
        <span className="w-full font-bold mb-4 text-center">Đăng nhập Threads</span>

        <form onSubmit={handleSubmit} className="max-w-96">
          <input className={style_input} name="user" value={state.user} onChange={handleInputChange} type="text" placeholder="Tên người dùng, số điện thoại hoặc email" />
          <input className={style_input} name="password" value={state.password} onChange={handleInputChange} type="password" placeholder="Mật khẩu" />
          <input className="w-full text-center bg-black rounded-xl cursor-pointer hover:text-opacity-50  p-4 font-bold text-white disabled:opacity-75" type="submit" value='Đăng nhập' />
        </form>

        <span className="mt-4">
          <a href="#" className="text-[#999999]">Bạn quên mật khẩu ư?</a>
        </span>
        <div className="w-full relative mt-6 mb-6 pt-2 pb-2">
          <div className="absolute pl-4 pr-4 top-1/2 left-1/2 text-[15px] translate-y-[-50%] translate-x-[-50%] bg-white text-[#999999]">
            <span>hoặc</span>
          </div>
          <hr className="m-0 w-full" />
        </div>
        <div className="w-full py-5 pl-5 pr-3 flex flex-row items-center border rounded-2xl cursor-pointer">
          <img src="..\src\assets\share-image\google.png" className="w-[45px] h-[45px]" alt="Google" />
          <div className="w-auto grow text-center font-bold">
            <span>Tiếp tục với Google</span>
          </div>
          <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#999999]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>

      </div>
      {/* vẫn nên sử dụng ant design */}

      {state.message && <Alert className="w-[40%] animate-bounce-up z-[2] py-4 px-6 absolute bottom-0 text-[16px] font-medium" message={state.message} type={state.status} showIcon></Alert>}
    </>
  )
}