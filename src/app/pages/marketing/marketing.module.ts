import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MARKETING_ROUTES } from './marketing.routing';
import { marketingComponent } from './marketing.component'
import { CommonModule } from '@angular/common';
import { ChartModule, CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ChartModule,
      RouterModule.forChild(MARKETING_ROUTES),
    ],
    declarations: [
      marketingComponent 

    ],
    providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService],
    exports: []
  })
  export class marketingModule { }