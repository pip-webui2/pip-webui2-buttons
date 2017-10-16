import { TestBed, inject } from '@angular/core/testing';

import { DrilldownListComponent } from './drilldown-list.component';

describe('a drilldown-list component', () => {
	let component: DrilldownListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DrilldownListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DrilldownListComponent], (DrilldownListComponent) => {
		component = DrilldownListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});