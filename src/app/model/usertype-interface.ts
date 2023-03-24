import { FormControl } from "@angular/forms";
import { IEntity, IPage } from "./model-interfaces";


export interface IUsertype extends IEntity {
    id: number;
    name: string;
    users: number;
}

export interface IUsertypePage extends IPage<IUsertype> {
}

export interface IUsertype2Form {
    id:          FormControl<number>;
    name:        FormControl<string>;
}

export interface IUsertype2Send {
    id:          number;
    name:        string;
}