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

import { CollectionModelProductPrice } from '../model/collectionModelProductPrice';
import { EntityModelProduct } from '../model/entityModelProduct';
import { EntityModelProductPrice } from '../model/entityModelProductPrice';
import { ProductPrice } from '../model/productPrice';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductPriceEntityService {

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
     * deleteProduct_price
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProductPriceUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProductPriceUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProductPriceUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProductPriceUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProductPriceUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllProduct_price
     * 
     * @param page page
     * @param size size
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllProductPriceUsingGET(page?: number, size?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<CollectionModelProductPrice>;
    public findAllProductPriceUsingGET(page?: number, size?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionModelProductPrice>>;
    public findAllProductPriceUsingGET(page?: number, size?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionModelProductPrice>>;
    public findAllProductPriceUsingGET(page?: number, size?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




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

        return this.httpClient.get<CollectionModelProductPrice>(`${this.basePath}/product_prices`,
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
     * findByIdProduct_price
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdProductPriceUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProductPrice>;
    public findByIdProductPriceUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProductPrice>>;
    public findByIdProductPriceUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProductPrice>>;
    public findByIdProductPriceUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdProductPriceUsingGET.');
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

        return this.httpClient.get<EntityModelProductPrice>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * product_priceProduct
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public productPriceProductUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public productPriceProductUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public productPriceProductUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public productPriceProductUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling productPriceProductUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}/product`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * product_priceProduct
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public productPriceProductUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProduct>;
    public productPriceProductUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProduct>>;
    public productPriceProductUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProduct>>;
    public productPriceProductUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling productPriceProductUsingGET.');
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

        return this.httpClient.get<EntityModelProduct>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}/product`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * product_priceProduct
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public productPriceProductUsingPATCH(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProduct>;
    public productPriceProductUsingPATCH(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProduct>>;
    public productPriceProductUsingPATCH(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProduct>>;
    public productPriceProductUsingPATCH(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling productPriceProductUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling productPriceProductUsingPATCH.');
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

        return this.httpClient.patch<EntityModelProduct>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}/product`,
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
     * product_priceProduct
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public productPriceProductUsingPOST(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProduct>;
    public productPriceProductUsingPOST(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProduct>>;
    public productPriceProductUsingPOST(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProduct>>;
    public productPriceProductUsingPOST(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling productPriceProductUsingPOST.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling productPriceProductUsingPOST.');
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

        return this.httpClient.post<EntityModelProduct>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}/product`,
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
     * product_priceProduct
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public productPriceProductUsingPUT(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProduct>;
    public productPriceProductUsingPUT(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProduct>>;
    public productPriceProductUsingPUT(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProduct>>;
    public productPriceProductUsingPUT(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling productPriceProductUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling productPriceProductUsingPUT.');
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

        return this.httpClient.put<EntityModelProduct>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}/product`,
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
     * saveProduct_price
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveProductPriceUsingPATCH(body: ProductPrice, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProductPrice>;
    public saveProductPriceUsingPATCH(body: ProductPrice, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProductPrice>>;
    public saveProductPriceUsingPATCH(body: ProductPrice, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProductPrice>>;
    public saveProductPriceUsingPATCH(body: ProductPrice, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveProductPriceUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveProductPriceUsingPATCH.');
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

        return this.httpClient.patch<EntityModelProductPrice>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}`,
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
     * saveProduct_price
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveProductPriceUsingPOST(body: ProductPrice, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProductPrice>;
    public saveProductPriceUsingPOST(body: ProductPrice, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProductPrice>>;
    public saveProductPriceUsingPOST(body: ProductPrice, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProductPrice>>;
    public saveProductPriceUsingPOST(body: ProductPrice, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveProductPriceUsingPOST.');
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

        return this.httpClient.post<EntityModelProductPrice>(`${this.basePath}/product_prices`,
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
     * saveProduct_price
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveProductPriceUsingPUT(body: ProductPrice, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelProductPrice>;
    public saveProductPriceUsingPUT(body: ProductPrice, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelProductPrice>>;
    public saveProductPriceUsingPUT(body: ProductPrice, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelProductPrice>>;
    public saveProductPriceUsingPUT(body: ProductPrice, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveProductPriceUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveProductPriceUsingPUT.');
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

        return this.httpClient.put<EntityModelProductPrice>(`${this.basePath}/product_prices/${encodeURIComponent(String(id))}`,
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
