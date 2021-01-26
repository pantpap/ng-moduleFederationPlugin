import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand-handler',
  templateUrl: './expand-handler.component.html',
  styleUrls: ['./expand-handler.component.scss']
})
export class ExpandHandlerComponent {
  @Input() title?: string;
  @Input() expanded?: boolean;
  @Input() testTag = '';
  @Input() classes?: string;
  @Input() withCard?: boolean;
}
