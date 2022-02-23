import { AfterViewInit, Component } from '@angular/core';
import { mount } from '../../../../node_modules/slingjs/sling.min';
import DashboardSlingComponent from './dashboard-sling.component';

@Component({
  selector: 'app-sling-card-list',
  templateUrl: './sling-card-list.component.html',
  styleUrls: ['./sling-card-list.component.scss']
})
export class SlingCardListComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit(): void {
    const compDashboardSling = new DashboardSlingComponent();
    mount('root-slingjs', compDashboardSling);
  }
}
