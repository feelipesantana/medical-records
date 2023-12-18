import {api} from '@/services/api'

import NextAuth,{NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { cookies } from 'next/headers'

import CredentialsProvider from 'next-auth/providers/credentials'


const nextAuthOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
    // }),
    CredentialsProvider({
      name: 'credentials',
      credentials:{
        email:{label:'email', type: 'text'},
        password: {label: 'password', type: 'password'}
      },

      async authorize(credentials, req){
        console.log(credentials)
        const response = await api.post('/auth', {
          email: credentials?.email,
          password: credentials?.password
        });
        const user = await response.data

        if(user){

          return user
        }
        return null
      }
    })

  ],
  pages: {
    signIn: '/'
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({session, token}) {
      // Você pode personalizar a lógica de sessão aqui, se necessário
      return session;
    },
  },


    // async jwt({token, user}) {
    //   user && (token.user = user)
    //   return token
    // },
    // async session({session, token}){

    //   if (token?.user) {

    //     session.user = token.user;
    //   }
    //   return session
    // },
    // async signIn({ account, user,credentials}){
    //   if(account?.provider === 'credentials'){

    //     if(user){
    //       // cookies().set('user_token', user.token)
    //       // cookies().set('site_count',  user.site_count)

    //       // const lgn= user.user.language.split('-');
    //       // cookies().set('language', lgn[0])
    //     }

    //   }
      // if(account?.provider === "google"){
      //   try {
      //     const response = await api.post('/authGoogle', {
      //       access_token: account?.access_token
      //     });

      //     const result = await response.data;
      //     cookies().set('user_token', result.token)
      //     cookies().set('site_count', result.site_count)

      //     return result

      //   } catch (error) {
      //     console.error('Ocorreu um erro durante a autenticação:', error);
      //     throw new Error('Falha na autenticação');
      //   }
      // }
      // if(account?.provider === "facebook"){
      //   try {

      //     const response = await api.post('/authFacebook', {
      //       tokenId: account?.access_token
      //     });

      //     const result = await response.data;
      //     cookies().set('user_token', result.token)
      //     cookies().set('site_count', result.site_count)

      //     return result

      //   } catch (error) {
      //     console.error('Ocorreu um erro durante a autenticação:', error);
      //     throw new Error('Falha na autenticação');
      //   }
      // }
      // return true
    
  
}
const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST, nextAuthOptions}

