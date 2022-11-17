import { Pageable, Sort } from "./shared-interface";
import { Team } from "./team-interface";
import { Usertype } from "./usertype-response-interface";

export interface DeveloperResponse {
    content:          Developer[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    first:            boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    empty:            boolean;
}

export interface Developer {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    issues:      number;
    teams:       number;
    resolutions: number;
    helps:       number;
    team:        Team;
    usertype:    Usertype;
}
