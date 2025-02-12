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


  export interface UserState {
    users: User[];
    userInfo: User | null;
    loading: boolean;
    error: string | null;
  }