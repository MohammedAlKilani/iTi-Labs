interface User {
    userName: string,
    email: string,
    password: string,
    age: number,
    gender: "male" | "female",
    phone?: string,
    isVerified?: boolean
}
type UserLogin = Pick<User,"email"|"password">