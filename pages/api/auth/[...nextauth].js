import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Config on providers
    providers : [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
    // Can add provider again, please insert on here
    ],
    callbacks: {
        // signIn: async (user, account, profile) => { return Promise.resolve(true)  },
        // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl)  },
        // session: async (session, user) => { return Promise.resolve(session)  },
        // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token)  }
    },
    debug:true,
}

export default (req,res) => NextAuth(req, res, options)
