export interface Todo {
    _id: string,
    title: string,
    completed: boolean
}

export interface RootState {
    todos: Todo[]
}