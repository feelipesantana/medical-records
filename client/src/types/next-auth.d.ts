import NextAuth from "next-auth";

declare module 'next-auth'{
  interface Session{
    user:any
  }

  interface User{
    user: any;
    token: any;
    site_count: any
  }
}