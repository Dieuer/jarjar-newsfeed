export type NewUser = {
    id: string;
    username: string;
    email: string;
}

export type Update = {
    id: string;
    title: string;
    username: string;
    date: string;
    comments: Comment[];
    reaction?: UpdateReaction;
}

export enum UpdateReaction {
    wow,
    angry,
    smile
}

export type Comment = {
    id: string;
    text: string;
    username: string;
    date: string;
    reaction?: CommentReaction;
}

export type CommentReaction = {
    like: number,
    dislike: number
}
