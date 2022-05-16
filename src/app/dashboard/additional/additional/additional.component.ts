import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Additional} from './additional';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})

export class AdditionalComponent {
  @Input() additional: Additional;
  @Output() remove_additional = new EventEmitter<any>();

  openModal(additional) {
    this.remove_additional.emit(additional);
  }
}
