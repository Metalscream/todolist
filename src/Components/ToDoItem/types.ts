export enum ToDoStatus {
    TODO = "todo",
    DOING = "doing",
    DONE = "done",
}

export interface IToDoItem {
    id: number;
    title: string;
    text: string;
    timeStamp: string;
    status: ToDoStatus;
}

export interface IToDoItemProps extends Omit<IToDoItem, "id">{

}