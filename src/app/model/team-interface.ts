import { Pageable, Sort } from "./shared-interface";

export interface Team {
    id:         number;
    name:       string;
    developer:  number;
    developers: number;
    project:    number;
}

export interface TeamResponse {
    content:          Team[];
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
