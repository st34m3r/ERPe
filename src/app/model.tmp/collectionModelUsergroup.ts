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
import { EmbeddedCollectionUsergroup } from './embeddedCollectionUsergroup';
import { Link } from './link';


/**
 * Resources of Usergroup
 */
export interface CollectionModelUsergroup { 
    embedded: EmbeddedCollectionUsergroup;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}
