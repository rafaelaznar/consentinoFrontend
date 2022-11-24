import { IDeveloper } from "./developer-interface";
import { Pageable, Sort } from "./shared-interface";
import { Team } from "./team-interface";

export interface ResolutionResponse {
    content: Resolution[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    number: number;
    sort: Sort;
    size: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface Resolution {
    id: number;
    issue: Issue;
    observations: string;
    integration_turn: number;
    integration_datetime: Date;
    pullrequest_url: string;
    developer: IDeveloper;
    value: number;
}

export interface Project {
    id: number;
    project_code: string;
    project_description: string;
    url: string;
    tasks: number;
    team: Team;
}

export interface Task {
    id: number;
    description: string;
    priority: number;
    complexity: number;
    project: Project;
    issues: number;
}

export interface Issue {
    id: number;
    open_datetime: string;
    observations: string;
    developer: IDeveloper;
    task: Task;
    resolutions: number;
    value: number;
}
