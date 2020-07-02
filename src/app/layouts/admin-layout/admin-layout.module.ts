import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AdminLayoutRoutes} from "./admin-layout.routing";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {IconsComponent} from "../../pages/icons/icons.component";
import {MapComponent} from "../../pages/map/map.component";
import {NotificationsComponent} from "../../pages/notifications/notifications.component";
import {TablesComponent} from "../../pages/tables/tables.component";
import {TypographyComponent} from "../../pages/typography/typography.component";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProductsModule } from 'src/app/pages/products/products.module';
import { commandesModule } from 'src/app/pages/commandes/commandes.module';
import { canusersModule } from 'src/app/pages/canusers/canusers.module';
import { FactureFournsModule } from 'src/app/pages/fournisseurs/FactureFourns.module';
import { purchasesModule } from 'src/app/pages/puchases/purchases.module'
import {salesModule} from 'src/app/pages/sales/sales.module'
import { marketingModule } from 'src/app/pages/marketing/marketing.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ProductsModule,
    commandesModule,
    canusersModule,
    FactureFournsModule,
    purchasesModule,
    salesModule,
    marketingModule
    
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    
    
    
    
    // RtlComponent
  ]
})
export class AdminLayoutModule {
}
