import { TestBed, inject } from '@angular/core/testing';

import { ActionListComponent } from './action-list.component';

describe('a pip-action-list component', () => {
	let component: ActionListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ActionListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ActionListComponent], (ActionListComponent) => {
		component = ActionListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});