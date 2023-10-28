export type Update = {
    id: string;
    author: User;
    title: string;
    text: string;
    createdDate: string;
    comments: Comment[];
    likes: number;
    dislikes: number;
    //reaction?: UpdateReaction
}

export type User = {
    id: string;
    firstname: string;
    lastname: string;
    image: string;
}

export enum UpdateReaction {
    wow,
    angry,
    smile
}

export type Comment = {
    id: string;
    text: string;
    //username: string;
    //date: string;
    //reaction?: CommentReaction;
}

export type CommentReaction = {
    like: number,
    dislike: number
}


