import {Component, OnInit} from '@angular/core';
import {LeadManagementFacade} from './store/leadManagementFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lead-management';
  constructor(private leadFacade: LeadManagementFacade) {
  }
  ngOnInit() {
    this.leadFacade.setTestValue('349875619834657981');
  }
}
