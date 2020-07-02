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
import { Facture } from './facture';
import { Links } from './links';
import { Product } from './product';


export interface EntityModelFacturedetRec { 
    description?: string;
    facture?: Facture;
    links?: Links;
    localtax1Tx?: number;
    localtax2Tx?: number;
    price?: number;
    product?: Product;
    productType?: number;
    qty?: number;
    rang?: number;
    remise?: number;
    remisePercent?: number;
    rowid?: number;
    specialCode?: number;
    subprice?: number;
    totalHt?: number;
    totalLocaltax1?: number;
    totalLocaltax2?: number;
    totalTtc?: number;
    totalTva?: number;
    tvaTx?: number;
}
