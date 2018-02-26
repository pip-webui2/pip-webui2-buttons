import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggle } from '@angular/material';

@Component({
	selector: 'pip-button-toggle-group',
	template: '<ng-content></ng-content>',
	styleUrls: ['./button-toggle-group.component.scss']
})
export class PipButtonToggleGroupComponent implements OnInit {
	ngOnInit() { }
}