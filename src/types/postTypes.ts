interface UserPosts {
  id: string;
  accountName: string;
  fullName: string;
  title: string;
  followers: number;
  avatar: string;
}

interface Media {
  height: number;
  id: string;
  mediaName:string;
  mediaType: number;
  parentId: string;
  url: string;
  width: number;
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
  media: Media[];
  like: Like;
  comment: number;
  retweet: number;
  send: number;
}
