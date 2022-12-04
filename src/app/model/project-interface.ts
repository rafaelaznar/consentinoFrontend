
import { Pageable, Sort } from "./shared-interface";
import { Team } from "./team-interface";




    export interface IProject {
        id: number;
        project_code: string;
        project_description: string;
        url: string;
        tasks: number;
        team: Team;

    }


    export interface ProjectResponse {
        content: IProject[];
        pageable: Pageable;
        totalPages: number;
        totalElements: number;
        last: boolean;
        size: number;
        number: number;
        sort: Sort;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }



