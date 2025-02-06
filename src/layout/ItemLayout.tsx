import React, { PureComponent } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {

}

interface State {

}

class ItemLayout extends React.Component<Props, State> {
    render() {
        return (<>
            <div className=' h-auto w-full flex justify-center items-center  '>
                <div className='w-[664px] flex justify-center items-center flex-col px-6'>
                    <div className='w-full h-[60px] flex justify-between items-center px-4 py-2 '>
                        <h1 className="text-center flex-1 text-lg font-semibold">Trang cá nhân</h1>
                        <button className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg>
                        </button>
                    </div>
                    <div className='w-full bg-white border rounded-3xl  p-5'>
                        <Outlet/>

                    </div>
                </div>
            </div>
        </>);
    }
}

export default ItemLayout;