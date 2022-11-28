import { IProject } from "./project-interface";
import { Pageable, Sort } from "./shared-interface";


export interface ITask {
    id:            number;
    description:   string;
    project:    IProject;
    priority:       number;
    complexity:    number;
}

export interface ITaskResponse {
    content:          ITask[];
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