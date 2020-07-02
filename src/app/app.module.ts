import { ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import { Configuration } from '.';

import { AuthControllerService } from './api/authController.service';
import { BankAccountEntityService } from './api/bankAccountEntity.service';
import { BankCategEntityService } from './api/bankCategEntity.service';
import { BankClassEntityService } from './api/bankClassEntity.service';
import { BankEntityService } from './api/bankEntity.service';
import { BankUrlEntityService } from './api/bankUrlEntity.service';
import { BasicErrorControllerService } from './api/basicErrorController.service';
import { CanUserEntityService } from './api/canUserEntity.service';
import { CategorieAssociationEntityService } from './api/categorieAssociationEntity.service';
import { CategorieEntityService } from './api/categorieEntity.service';
import { CategorieFournisseurEntityService } from './api/categorieFournisseurEntity.service';
import { CategorieMemberEntityService } from './api/categorieMemberEntity.service';
import { CategorieProductEntityService } from './api/categorieProductEntity.service';
import { CategorieSocieteEntityService } from './api/categorieSocieteEntity.service';
import { CommandeEntityService } from './api/commandeEntity.service';
import { CommandeFournisseurEntityService } from './api/commandeFournisseurEntity.service';
import { CommandeFournisseurLogEntityService } from './api/commandeFournisseurLogEntity.service';
import { CommandeFournisseurdetEntityService } from './api/commandeFournisseurdetEntity.service';
import { CommandedetEntityService } from './api/commandedetEntity.service';
import { CronjobEntityService } from './api/cronjobEntity.service';
import { ElementElementEntityService } from './api/elementElementEntity.service';
import { FactureEntityService } from './api/factureEntity.service';
import { FactureFournDetEntityService } from './api/factureFournDetEntity.service';
import { FactureFournEntityService } from './api/factureFournEntity.service';
import { FactureRecEntityService } from './api/factureRecEntity.service';
import { FacturedetEntityService } from './api/facturedetEntity.service';
import { FacturedetRecEntityService } from './api/facturedetRecEntity.service';
import { MailingCiblesEntityService } from './api/mailingCiblesEntity.service';
import { MailingEntityService } from './api/mailingEntity.service';
import { ProductBatchEntityService } from './api/productBatchEntity.service';
import { ProductEntityService } from './api/productEntity.service';
import { ProductFournisseurPriceEntityService } from './api/productFournisseurPriceEntity.service';
import { ProductFournisseurPriceLogEntityService } from './api/productFournisseurPriceLogEntity.service';
import { ProductLotEntityService } from './api/productLotEntity.service';
import { ProductPriceEntityService } from './api/productPriceEntity.service';
import { ProductStockEntityService } from './api/productStockEntity.service';
import { ProfileControllerService } from './api/profileController.service';
import { RightsDefEntityService } from './api/rightsDefEntity.service';
import { RoleEntityService } from './api/roleEntity.service';
import { TestControllerService } from './api/testController.service';
import { UserEntityService } from './api/userEntity.service';
import { UserParamEntityService } from './api/userParamEntity.service';
import { UserRightsEntityService } from './api/userRightsEntity.service';
import { UsergroupEntityService } from './api/usergroupEntity.service';
import { UsergroupRightsEntityService } from './api/usergroupRightsEntity.service';
import { UsergroupUserEntityService } from './api/usergroupUserEntity.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { PurchaseEntityService, SaleEntityService } from './api/api';
@NgModule({
  imports:      [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent],
  providers: [
    PurchaseEntityService,
    SaleEntityService,
    AuthControllerService,
    BankAccountEntityService,
    BankCategEntityService,
    BankClassEntityService,
    BankEntityService,
    BankUrlEntityService,
    BasicErrorControllerService,
    CanUserEntityService,
    CategorieAssociationEntityService,
    CategorieEntityService,
    CategorieFournisseurEntityService,
    CategorieMemberEntityService,
    CategorieProductEntityService,
    CategorieSocieteEntityService,
    CommandeEntityService,
    CommandeFournisseurEntityService,
    CommandeFournisseurLogEntityService,
    CommandeFournisseurdetEntityService,
    CommandedetEntityService,
    CronjobEntityService,
    ElementElementEntityService,
    FactureEntityService,
    FactureFournDetEntityService,
    FactureFournEntityService,
    FactureRecEntityService,
    FacturedetEntityService,
    FacturedetRecEntityService,
    MailingCiblesEntityService,
    MailingEntityService,
    ProductBatchEntityService,
    ProductEntityService,
    ProductFournisseurPriceEntityService,
    ProductFournisseurPriceLogEntityService,
    ProductLotEntityService,
    ProductPriceEntityService,
    ProductStockEntityService,
    ProfileControllerService,
    RightsDefEntityService,
    RoleEntityService,
    TestControllerService,
    UserEntityService,
    UserParamEntityService,
    UserRightsEntityService,
    UsergroupEntityService,
    UsergroupRightsEntityService,
    UsergroupUserEntityService ]
})
export class AppModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AppModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('AppModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
