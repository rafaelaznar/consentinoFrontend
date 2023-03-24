import { FormControl } from "@angular/forms";
import { IEntity, IPage } from "./model-interfaces";
import { IUsertype } from "./usertype-interface";


export interface IUser extends IEntity{
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    issues:      number;
    teams:       number;
    resolutions: number;
    helps:       number;
    usertype:    IUsertype;
}

export interface IUserPage extends IPage<IUser> {    
}

export interface IUser2Form {
    id:          FormControl<number>;
    name:        FormControl<string>;
    surname:     FormControl<string>;
    lastname:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    id_team:        FormControl<number>;
    id_usertype:    FormControl<number>;
}

export interface IUser2Send {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    team:        IEntity;
    usertype:    IEntity;
}