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
import { EmbeddedCollectionProductBatch } from './embeddedCollectionProductBatch';
import { Link } from './link';


/**
 * Resources of Product_batch
 */
export interface CollectionModelProductBatch { 
    embedded: EmbeddedCollectionProductBatch;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}