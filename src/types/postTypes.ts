interface UserFollow {
    id: number;
    name: string;
    avatar: string;
}




interface Media {
    image: string[];
    video: string[];
}

interface Like {
    id: number;
    userid: number;
    isLiked: boolean;
}

interface Posts {
    id: string;
    user: UserFollow;
    content: string;
    timePost: string;
    media: Media;
    like: Like;
    comment: number;
    retweet: number;
    send: number;
}
