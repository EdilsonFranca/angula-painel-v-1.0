import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.css']
})
export class DashboardDataComponent implements OnInit {

  private data: any;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      const response =  this.activatedRoute.snapshot.data['data'];
       this.data = response.data;
    });
  }
}
