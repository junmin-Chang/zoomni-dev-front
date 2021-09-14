import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const isCorrectCredentials = (credentials : any) =>
    credentials.username === process.env.NEXTAUTH_USERNAME &&
    credentials.password === process.env.NEXTAUTH_PASSWORD

const options = {
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username", type : "text", placeholder: "username"
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            authorize: async credentials => {
                if (isCorrectCredentials(credentials)) {
                    const user = { id: 1, name: "Admin" }
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ]
}

export default (req : any, res : any) => NextAuth(req,res,options)