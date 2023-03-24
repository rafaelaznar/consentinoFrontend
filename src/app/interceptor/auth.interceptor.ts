import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private oSessionService: SessionService,
        private oRouter: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepting request ...', req);


        if (this.oSessionService.isSessionActive()) {
            req = req.clone({
                headers: req.headers.append('Authorization', `Bearer ${this.oSessionService.getToken()}`)
            });
            console.log(req.headers.get('Authorization').toString());
            /*
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${this.oSessionService.getToken()}`
                }
            });
            */
            console.log('  session active! New req: ', req);
        } else {
            console.log('url', req.url, req.method);
            if (req.url.indexOf('session') == -1) {
                console.log('  session inactive! goto login!');
                this.oRouter.navigateByUrl('login');
            } else {
                if (req.method == "POST") {
                    console.log('  login try! go on!');
                }
            }
        }
        return next.handle(req);
    }
}