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
import { EmbeddedCollectionCommandeFournisseur } from './embeddedCollectionCommandeFournisseur';
import { Link } from './link';


/**
 * Resources of Commande_fournisseur
 */
export interface CollectionModelCommandeFournisseur { 
    embedded: EmbeddedCollectionCommandeFournisseur;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}