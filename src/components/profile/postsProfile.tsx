import React from 'react';
import ListPost from '../singlecomponents/listPost';

const data: Posts[] = [
    {
      id: 1,
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
    {
      id: 2,
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
    {
      id: 244,
      user: {
        id: 1,
        name: "min.tine.02",
        avatar: "avt.jpg",
      },
      content: "Cầu vồng tượng trưng cho hy vọng.",
      timePost: "1 giờ",
      media: {
        image: ["../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg","../src/assets/share-image/" + "avt.jpg"],
        video: [],
      },
      like: {
        id: 1,
        userid: 1,
        isLiked: false,
      },
      comment: 2,
      retweet: 3,
      send: 4,
    },
  ];
const PostsProfile: React.FC = () => {
    return (
        <>
        <div className='-mx-5 w-[calc(100%+2,5rem)] flex border-b pl-4 pb-4  justify-start items-center '>
        <div className='w-4/5 flex items-center justify-start gap-2'>
          <div className='  rounded-full bg-black w-10 h-10 avatar'>

          </div>
          <div className=' w-4/5 cursor-pointer text-[#999999] text-[15px]'>
            Có gì mới?
          </div>
        </div>
        <div className='w-1/5 flex items-center justify-center'>
          <button className="flex justify-center border items-center  p-2 text-black font-semibold rounded-lg text-[15px] " style={{ border: "#rgba(0, 0, 0, 0.15)" }}>
            Đăng bài
          </button>
        </div>
      </div>
<div className='-mx-5 w-[calc(100%+2,5rem)] h-auto'>
    <ListPost datas={data}></ListPost>
</div>
</>
    );
};

export default PostsProfile;