import React, { useEffect } from 'react';
import ListPost from '../../../components/singlecomponents/listPost';
import PostModal from '../../../components/modals/postModal';


const PostsProfile: React.FC<{posts:any[]}> = ({posts}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [data, setData] = React.useState<Posts[]>([]);
  useEffect(() => {
    setData(posts);
  }, [posts]);
    return (
      
        <>
       
      
      
        <div className='-mx-5 w-[calc(100%+2,5rem)] flex border-b pl-4 pb-4  justify-start items-center '>
        <div className='w-4/5 flex items-center justify-start gap-2'>
          <div className='  rounded-full bg-black w-10 h-10 avatar'>
        
          </div>
          <div className=' w-4/5 cursor-pointer text-[#999999] text-[15px]' onClick={()=>{console.log(isModalVisible),setIsModalVisible(true),console.log(isModalVisible)}}>
            Có gì mới?
          </div>
        </div>
        <div className='w-1/5 flex items-center justify-center'>
          <button onClick={()=>setIsModalVisible(true)} className="flex justify-center border items-center  p-2 text-black font-semibold rounded-lg text-[15px] " style={{ border: "#rgba(0, 0, 0, 0.15)" }}>
            Đăng bài
          </button>
        </div>
      </div>
<div className='-mx-5 w-[calc(100%+2,5rem)] h-auto'>
    <ListPost datas={data}></ListPost>
</div>
{isModalVisible &&<PostModal isOpen={isModalVisible} onClose={function (): void {
          setIsModalVisible(false)
        } }/> }
</>
    );
};

export default PostsProfile;