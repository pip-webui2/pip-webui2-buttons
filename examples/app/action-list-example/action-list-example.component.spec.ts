import { TestBed, inject } from '@angular/core/testing';

import { ActionListExampleComponent } from './action-list-example.component';

describe('a action-list-example component', () => {
	let component: ActionListExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ActionListExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ActionListExampleComponent], (ActionListExampleComponent) => {
		component = ActionListExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});