export interface Follow {
    id: string;
    name: string;
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
  
  export interface UserState {
    users: User[];
    userInfo: User | null;
    loading: boolean;
    error: string | null;
  }