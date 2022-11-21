
import { Team } from "./team-interface";
import { Usertype } from "./usertype-response-interface";




export interface IDeveloper {
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
