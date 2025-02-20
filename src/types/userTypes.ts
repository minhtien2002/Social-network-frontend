export interface Follow {
    id: string;
    name: string;
  }

  export interface UserPost {
    id: number;
    accountName: string;
    fullName: string;
    title: string;
    followers: number;
    avatar: string;
}
export interface RequestApiUserFollow {
    accountName: string;
    type: string;
    typePrivate: boolean;
}

export interface User {
    fullName: string;
    accountName: string;
    email: string;
    createAt: Date;
    title: string;
    links: string;
    active: boolean;
    accountPrivated: boolean;
    accountConfirmed: boolean;
    urlAvatar: string;
    followers: Follow[];
    followees: Follow[];
  }
  
  export interface UserSearch {
    fullName: string;
    accountName: string;
    title: string;
    urlAvatar: string;
    followers: Follow[];
    IsFollow: 'follow' | 'unfollow' | 'followup';
    
  }
  export interface UserFollowProfile {
    src: string;
    accountName: string;
    fullName: string;
    id:string;
    isFollow: number;
}

  export interface UserState {
    users: User[];
    userInfo: User | null;
    userFollow: UserFollowProfile[];
    dataInfo: any;
    loading: boolean;
    error: string | null;
  }