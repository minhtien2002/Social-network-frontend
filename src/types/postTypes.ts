
interface UserPosts {
    id: number;
    accountName: string;
    fullName: string;
    title: string;
    followers: number;
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
    user: UserPosts;
    content: string;
    timePost: string;
    media: Media;
    like: Like;
    comment: number;
    retweet: number;
    send: number;
}
