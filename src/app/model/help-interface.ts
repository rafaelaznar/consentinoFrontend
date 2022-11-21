import { IDeveloper } from 'src/app/model/developer-interface';
import { Pageable, Sort } from "./shared-interface";

export interface HelpResponse {
    content:          Help[];
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

export interface Help {
  id: number;
  resolution: any;
  developer: IDeveloper;
  percentage: number;
}
