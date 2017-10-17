import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggle } from '@angular/material';

@Component({
	selector: 'pip-button-toggle-group',
	templateUrl: 'button-toggle-group.component.html',
	styleUrls: ['./button-toggle-group.component.scss']
})
export class PipButtonToggleGroupComponent implements OnInit {
	@Input() vertical: boolean;
	@Input() name: string;
	@Input() selected: MatButtonToggle | null;
	@Input() value: any;
	@Output() change = new EventEmitter();

	ngOnInit() { }
}