import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'fab-speed-dial-example',
	templateUrl: 'fab-speed-dial-example.component.html',
	styleUrls: ['./fab-speed-dial-example.component.scss']
})
export class FabSpeedDialExampleComponent implements OnInit {

    public open: boolean = false;
    public spin: boolean = false;
    public direction: string = 'up';
    public animationMode: string = 'fling';

	ngOnInit() { }
}