import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'order-list',
  templateUrl: 'order-list.component.html',
  styleUrls: []

})
export class OrderListComponent implements AfterViewInit {

  @Input() submittedOrdersModel: any;
  @Output() submittedOrdersModelChange: EventEmitter<any> = new EventEmitter();
  public orders: Array<any> = [];

  constructor() { }

  public ngAfterViewInit() { }

  get diagnostic() {
    return JSON.stringify(this.submittedOrdersModel);

  }

}
