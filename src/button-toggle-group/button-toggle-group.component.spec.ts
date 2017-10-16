import { TestBed, inject } from '@angular/core/testing';

import { ButtonToggleGroupComponent } from './button-toggle-group.component';

describe('a button-toggle-group component', () => {
	let component: ButtonToggleGroupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonToggleGroupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonToggleGroupComponent], (ButtonToggleGroupComponent) => {
		component = ButtonToggleGroupComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});