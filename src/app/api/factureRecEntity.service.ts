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

import { CollectionModelFactureRec } from '../model/collectionModelFactureRec';
import { EntityModelFactureRec } from '../model/entityModelFactureRec';
import { FactureRec } from '../model/factureRec';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FactureRecEntityService {

    protected basePath = 'https://7b436016388b.ngrok.io';
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
     * deleteFacture_rec
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFactureRecUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteFactureRecUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteFactureRecUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteFactureRecUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFactureRecUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/facture_recs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllFacture_rec
     * 
     * @param page page
     * @param size size
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllFactureRecUsingGET(page?: number, size?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<CollectionModelFactureRec>;
    public findAllFactureRecUsingGET(page?: number, size?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionModelFactureRec>>;
    public findAllFactureRecUsingGET(page?: number, size?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionModelFactureRec>>;
    public findAllFactureRecUsingGET(page?: number, size?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




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

        return this.httpClient.get<CollectionModelFactureRec>(`${this.basePath}/facture_recs`,
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
     * findByIdFacture_rec
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdFactureRecUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelFactureRec>;
    public findByIdFactureRecUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelFactureRec>>;
    public findByIdFactureRecUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelFactureRec>>;
    public findByIdFactureRecUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdFactureRecUsingGET.');
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

        return this.httpClient.get<EntityModelFactureRec>(`${this.basePath}/facture_recs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveFacture_rec
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveFactureRecUsingPATCH(body: FactureRec, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelFactureRec>;
    public saveFactureRecUsingPATCH(body: FactureRec, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelFactureRec>>;
    public saveFactureRecUsingPATCH(body: FactureRec, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelFactureRec>>;
    public saveFactureRecUsingPATCH(body: FactureRec, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveFactureRecUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveFactureRecUsingPATCH.');
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

        return this.httpClient.patch<EntityModelFactureRec>(`${this.basePath}/facture_recs/${encodeURIComponent(String(id))}`,
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
     * saveFacture_rec
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveFactureRecUsingPOST(body: FactureRec, observe?: 'body', reportProgress?: boolean): Observable<EntityModelFactureRec>;
    public saveFactureRecUsingPOST(body: FactureRec, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelFactureRec>>;
    public saveFactureRecUsingPOST(body: FactureRec, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelFactureRec>>;
    public saveFactureRecUsingPOST(body: FactureRec, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveFactureRecUsingPOST.');
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

        return this.httpClient.post<EntityModelFactureRec>(`${this.basePath}/facture_recs`,
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
     * saveFacture_rec
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveFactureRecUsingPUT(body: FactureRec, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelFactureRec>;
    public saveFactureRecUsingPUT(body: FactureRec, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelFactureRec>>;
    public saveFactureRecUsingPUT(body: FactureRec, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelFactureRec>>;
    public saveFactureRecUsingPUT(body: FactureRec, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveFactureRecUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveFactureRecUsingPUT.');
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

        return this.httpClient.put<EntityModelFactureRec>(`${this.basePath}/facture_recs/${encodeURIComponent(String(id))}`,
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