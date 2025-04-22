import { Role } from "../models/roles";

export const helloWord = () => "Hello, World! Paritosh Here";

    export const getRoles = async() => {
        const roles = await Role.find();
        console.log(roles);
        return roles;
    }

    type Post = {
        title: string;
        content: string;
    };
    export const newPost = (_:unknown, { title, content }:Post) => {
        return { title, content };
        }
    