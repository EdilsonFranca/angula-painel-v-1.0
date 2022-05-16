import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Additional} from '../additional/additional';

@Component({
  selector: 'app-additional-list',
  templateUrl: './additional-list.component.html',
  styleUrls: ['./additional-list.component.css']
})
export class AdditionalListComponent implements OnInit {

  additional: Additional[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      const response =  this.activatedRoute.snapshot.data['additional'];
       this.additional = response.data;
    });
  }
}
