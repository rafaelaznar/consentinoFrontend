
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
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

export interface IDeveloper2Send {
    id:          FormControl<number>;
    name:        FormControl<string>;
    surname:     FormControl<string>;
    lastname:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    team:        FormControl<IEntity>;
    usertype:    FormControl<IEntity>;
}
