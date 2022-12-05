import { Team } from "./team-interface";
import { ITask } from "./task-interface";


export interface IProject {
    id: number;
    project_code: string;
    project_description: string;
    url: string;
    task: Task;
    team: Team;
}
