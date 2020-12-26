import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Config on providers
    providers : [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.GOOGLE_CLIENT_SECRET,
        }),
    // Can add provider again, please insert on here
    ],


}
