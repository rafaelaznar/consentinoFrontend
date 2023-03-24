import { FormControl } from "@angular/forms";

export interface ILogin {
    username: FormControl<string>;
    password: FormControl<string>;
}
