import React from 'react';
import { Image } from 'antd';

interface AvatarProps {
    src: string;
    alt: string;
    preview?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, preview = false }) => {
    return (
        <div className="w-full h-full rounded-full bg-slate-200 flex justify-center items-center cursor-pointer">
        <Image
            preview={preview}
            src={src}
            alt={alt}
        ></Image>
    </div>
    );
};

export default Avatar;