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
import { EmbeddedCollectionCategorieFournisseur } from './embeddedCollectionCategorieFournisseur';
import { Link } from './link';


/**
 * Resources of Categorie_fournisseur
 */
export interface CollectionModelCategorieFournisseur { 
    embedded: EmbeddedCollectionCategorieFournisseur;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}
