import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import {MessageService} from "primeng/api";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService, private loginService: LoginService, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('login')){
            let modifiedReq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + window.localStorage.getItem('jwt-token'))
            });

            switch (req.method) {
                case 'POST':
                    // Process POST request
                    this.messageService.clear();
                    this.messageService.add({ severity: 'info', summary: 'Sending', detail: 'Posting data...' });
                    break;
                case 'PUT':
                    // Process PUT request
                    this.messageService.clear();
                    this.messageService.add({ severity: 'info', summary: 'Updating', detail: 'Updating data...' });
                    break;
                case 'DELETE':
                    // Process DELETE request
                    this.messageService.clear();
                    this.messageService.add({ severity: 'info', summary: 'Deleting', detail: 'Deleting data...' });
                    break;
                default:
                    this.messageService.clear();
                    break;
            }
            return next.handle(modifiedReq).pipe(
                tap(
                    event => {
                        if (event instanceof HttpResponse) {
                            switch (req.method) {
                                case 'POST':
                                    // Process POST response
                                    this.messageService.clear();
                                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data sent.' });
                                    break;
                                case 'PUT':
                                    // Process PUT response
                                    this.messageService.clear();
                                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data updated.' });
                                    break;
                                case 'DELETE':
                                    // Process DELETE response
                                    this.messageService.clear();
                                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data deleted.' });
                                    break;
                                default:
                                    this.messageService.clear();
                                    break;
                            }
                        }
                    },
                    (error: any) => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 403) {
                                this.router.navigateByUrl('/dashboard').then(
                                    () => {
                                        this.messageService.clear();
                                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Your are not authorized!' });
                                    }
                                );
                            } else if(error.status == 401) {
                                this.messageService.clear();
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Your session was over!' });
                                this.loginService.logout()
                            } else {
                                this.messageService.clear();
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Oops! Something went wrong...' });
                            }
                        }
                    }
                )
            );
        } else {
            return next.handle(req);
        }
    }
}
