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
import { EmbeddedCollectionUserParam } from './embeddedCollectionUserParam';
import { Link } from './link';


/**
 * Resources of User_param
 */
export interface CollectionModelUserParam { 
    embedded: EmbeddedCollectionUserParam;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}