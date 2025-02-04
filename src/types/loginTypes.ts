export interface Account {

account:string;
password:string;
}
export interface register {

    userName : string;
      password : string;
     email : string;
      accountName : string;
    fullName : string;

}

  export interface AccountState {
  
    account: Account | null;
    register: string | null;
    loading: boolean;
    error: string | null;
    token: null, 
  }