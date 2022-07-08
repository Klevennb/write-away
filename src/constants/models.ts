export type UserType = {

    bio?: string,
    created_at: string,
    current_streak?: number,
    friends?: UserType[],
    id: number,
    time_goal?: string,
    username: string,  
    word_goal?: number,

}