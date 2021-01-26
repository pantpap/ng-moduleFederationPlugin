import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-ng-drop-down',
  templateUrl: './ng-drop-down.component.html',
  styleUrls: ['./ng-drop-down.component.scss']
})
export class NgDropDownComponent implements OnInit {
@Input() dataSource: any;
@Input() controlName: string;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(ev): any{
    console.log(ev);
  }

}
