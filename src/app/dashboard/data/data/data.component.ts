import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {DataService} from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() data;
  public barChartData: ChartDataSets[];
  public barChartLabels: Label[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartPlugins = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public chartColors: Color[] = [
    { backgroundColor: '#ff9029' }
  ];

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.barChartLabels = Object.keys(this.data);
    // @ts-ignore
    this.barChartData = [{ data: Object.values(this.data), label: 'Pedidos' }];
  }

  getChatBy(type: string) {
    this.dataService.listFromOrder(type)
      .subscribe((data) => {
        // @ts-ignore
        this.barChartLabels = Object.keys(data.data);
        // @ts-ignore
        this.barChartData = [{ data: Object.values(data.data), label: 'Pedidos' }];
      }, err => {
      });
  }
}
