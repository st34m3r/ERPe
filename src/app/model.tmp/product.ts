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
import { CategorieProduct } from './categorieProduct';
import { CommandeFournisseurdet } from './commandeFournisseurdet';
import { Commandedet } from './commandedet';
import { FactureFournDet } from './factureFournDet';
import { Facturedet } from './facturedet';
import { FacturedetRec } from './facturedetRec';
import { ProductPrice } from './productPrice';
import { ProductStock } from './productStock';


export interface Product { 
    categorieProducts?: Array<CategorieProduct>;
    commandeFournisseurdets?: Array<CommandeFournisseurdet>;
    commandedets?: Array<Commandedet>;
    datec?: Date;
    description?: string;
    factureFournDets?: Array<FactureFournDet>;
    facturedetRecs?: Array<FacturedetRec>;
    facturedets?: Array<Facturedet>;
    finished?: number;
    importKey?: string;
    price?: number;
    priceTtc?: number;
    productPrices?: Array<ProductPrice>;
    productStocks?: Array<ProductStock>;
    ref?: string;
    rowid?: number;
    seuilStockAlerte?: number;
    stock?: number;
    tobuy?: number;
    tosell?: number;
    volume?: number;
    volumeUnits?: number;
}