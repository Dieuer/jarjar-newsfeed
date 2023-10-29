export type Update = {
    id: string;
    author: User;
    title: string;
    text: string;
    createdDate: Date;
    comments: Comment[];
    likes: number;
    dislikes: number;
}

export type User = {
    id: string;
    firstname: string;
    lastname: string;
    image: string;
}

export type UpdateReaction = {
    like: string;
    dislike: string;
}

export type Comment = {
    id: string;
    author: User
    text: string;
    createdDate: Date;
}