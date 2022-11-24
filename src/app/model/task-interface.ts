import { Pageable, Sort } from "./shared-interface";


export interface Task {
    id:            number;
    description:   string;
    id_project:    number;
    priority:       number;
    complexity:    number;
}

export interface TaskResponse {
    content:          Task[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}