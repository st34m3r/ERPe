import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class marketingComponent implements OnInit {
  public prediction = [{"Date" : "2010-01-12" , "value" : "254"}];
  constructor() { }

  public primaryXAxis: Object;
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.chartData = [
            { month: 'Jan', sales: 35 },
            { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 },
            { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 },
            { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 },
            { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 },
            { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 },
            { month: 'Dec', sales: 32 }
        ];
        this.primaryXAxis = {
            valueType: 'Category'
        };
    }

 
}
