/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CollectionModelUserRights } from '../model/collectionModelUserRights';
import { EntityModelCanUser } from '../model/entityModelCanUser';
import { EntityModelUserRights } from '../model/entityModelUserRights';
import { UserRights } from '../model/userRights';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserRightsEntityService {

    protected basePath = 'http://defc28a7131c.ngrok.io';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * deleteUser_rights
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUserRightsUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUserRightsUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUserRightsUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUserRightsUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUserRightsUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllUser_rights
     * 
     * @param page page
     * @param size size
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUserRightsUsingGET(page?: number, size?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<CollectionModelUserRights>;
    public findAllUserRightsUsingGET(page?: number, size?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionModelUserRights>>;
    public findAllUserRightsUsingGET(page?: number, size?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionModelUserRights>>;
    public findAllUserRightsUsingGET(page?: number, size?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json',
            'application/json',
            'application/x-spring-data-compact+json',
            'text/uri-list'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<CollectionModelUserRights>(`${this.basePath}/user_rightses`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByIdUser_rights
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUserRightsUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelUserRights>;
    public findByIdUserRightsUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelUserRights>>;
    public findByIdUserRightsUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelUserRights>>;
    public findByIdUserRightsUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUserRightsUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelUserRights>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveUser_rights
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUserRightsUsingPATCH(body: UserRights, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelUserRights>;
    public saveUserRightsUsingPATCH(body: UserRights, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelUserRights>>;
    public saveUserRightsUsingPATCH(body: UserRights, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelUserRights>>;
    public saveUserRightsUsingPATCH(body: UserRights, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveUserRightsUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveUserRightsUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelUserRights>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveUser_rights
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUserRightsUsingPOST(body: UserRights, observe?: 'body', reportProgress?: boolean): Observable<EntityModelUserRights>;
    public saveUserRightsUsingPOST(body: UserRights, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelUserRights>>;
    public saveUserRightsUsingPOST(body: UserRights, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelUserRights>>;
    public saveUserRightsUsingPOST(body: UserRights, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveUserRightsUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelUserRights>(`${this.basePath}/user_rightses`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveUser_rights
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUserRightsUsingPUT(body: UserRights, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelUserRights>;
    public saveUserRightsUsingPUT(body: UserRights, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelUserRights>>;
    public saveUserRightsUsingPUT(body: UserRights, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelUserRights>>;
    public saveUserRightsUsingPUT(body: UserRights, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveUserRightsUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveUserRightsUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelUserRights>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * user_rightsUser
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRightsUserUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public userRightsUserUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public userRightsUserUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public userRightsUserUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userRightsUserUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * user_rightsUser
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRightsUserUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public userRightsUserUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public userRightsUserUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public userRightsUserUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userRightsUserUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelCanUser>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * user_rightsUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRightsUserUsingPATCH(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public userRightsUserUsingPATCH(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public userRightsUserUsingPATCH(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public userRightsUserUsingPATCH(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userRightsUserUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userRightsUserUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelCanUser>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * user_rightsUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRightsUserUsingPOST(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public userRightsUserUsingPOST(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public userRightsUserUsingPOST(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public userRightsUserUsingPOST(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userRightsUserUsingPOST.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userRightsUserUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelCanUser>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * user_rightsUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRightsUserUsingPUT(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public userRightsUserUsingPUT(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public userRightsUserUsingPUT(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public userRightsUserUsingPUT(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userRightsUserUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userRightsUserUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelCanUser>(`${this.basePath}/user_rightses/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}