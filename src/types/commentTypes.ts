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

interface Comments {
    id: string;
    user: UserFollow;
    content: string;
    timeComment: string;
    media: Media;
    like: Like;
    comment: number;
    retweet: number;
    send: number;
}
