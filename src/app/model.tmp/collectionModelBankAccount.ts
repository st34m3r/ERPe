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
import { EmbeddedCollectionBankAccount } from './embeddedCollectionBankAccount';
import { Link } from './link';


/**
 * Resources of Bank_account
 */
export interface CollectionModelBankAccount { 
    embedded: EmbeddedCollectionBankAccount;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}
