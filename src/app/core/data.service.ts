import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs";
import { throwError } from "rxjs";

import { ICustomer, IOrder } from "../shared/interfaces";

@Injectable()
export class DataService {
    baseUrl: string = 'assests/';

    constructor() { }

    private handleError(error: any) {
        console.log('server error', error);
        if(error.error instanceof Error) {
            const errMessage =error.error.message;
            return throwError(() => errMessage);
  }
  return throwError(() => error || 'Node.js server error');
    }
}
