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
import { CommandeFournisseurLog } from './commandeFournisseurLog';
import { CommandeFournisseurdet } from './commandeFournisseurdet';
import { Commandedet } from './commandedet';


export interface Commande { 
    amountHt?: number;
    commandeFournisseurLogs?: Array<CommandeFournisseurLog>;
    commandeFournisseurdets?: Array<CommandeFournisseurdet>;
    commandedets?: Array<Commandedet>;
    dateCloture?: Date;
    dateCommande?: Date;
    dateCreation?: Date;
    dateLivraison?: Date;
    dateValid?: Date;
    entity?: number;
    facture?: number;
    importKey?: string;
    localtax1?: number;
    localtax2?: number;
    modelPdf?: string;
    note?: string;
    notePublic?: string;
    ref?: string;
    refClient?: string;
    remise?: number;
    remiseAbsolue?: number;
    remisePercent?: number;
    rowid?: number;
    source?: number;
    tms?: Date;
    totalHt?: number;
    totalTtc?: number;
    tva?: number;
}