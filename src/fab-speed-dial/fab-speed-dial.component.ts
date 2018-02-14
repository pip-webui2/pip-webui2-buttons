import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    AfterContentInit,
    ElementRef,
    Renderer,
    Inject,
    forwardRef,
    ContentChildren,
    QueryList,
    ContentChild,
    HostBinding,
    HostListener
} from "@angular/core";

import { PipFabSpeedDialActions } from './fab-speed-dial-actions.component';

@Component({
    selector: 'pip-fab-speed-dial',
    template: `
        <div class="pip-fab-speed-dial-container">
            <ng-content select="pip-fab-trigger"></ng-content>
            <ng-content select="pip-fab-actions"></ng-content>
        </div>
    `,
    styleUrls: ['fab-speed-dial.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PipFabSpeedDialComponent implements AfterContentInit {
    private isInitialized: boolean = false;
    private _direction: string = 'up';
    private _open: boolean = false;
    private _animationMode: string = 'fling';

    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     */
    @Input() fixed: boolean = false;

    /**
     * Whether this speed dial is opened
     */
    @HostBinding('class.pip-opened')
    @Input() get open() {
        return this._open;
    }

    set open(open: boolean) {
        let previousOpen = this._open;
        this._open = open;
        if (previousOpen != this._open) {
            this.openChange.emit(this._open);
            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */
    @Input() get direction() {
        return this._direction;
    }

    set direction(direction: string) {
        let previousDir = this._direction;
        this._direction = direction;
        if (previousDir != this.direction) {
            this._setElementClass(previousDir, false);
            this._setElementClass(this.direction, true);

            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */
    @Input() get animationMode() {
        return this._animationMode;
    }

    set animationMode(animationMode: string) {
        let previousAnimationMode = this._animationMode;
        this._animationMode = animationMode;
        if (previousAnimationMode != this._animationMode) {
            this._setElementClass(previousAnimationMode, false);
            this._setElementClass(this.animationMode, true);

            if (this.isInitialized) {
                // To start another detect lifecycle and force the "close" on the action buttons
                Promise.resolve(null).then(() => this.open = false);
            }
        }
    }

    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ContentChild(PipFabSpeedDialActions) _childActions: PipFabSpeedDialActions;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngAfterContentInit(): void {
        this.isInitialized = true;
        this.setActionsVisibility();
        this._setElementClass(this.direction, true);
        this._setElementClass(this.animationMode, true);
    }

    /**
     * Toggle the open state of this speed dial
     */
    public toggle() {
        this.open = !this.open;
    }

    @HostListener('click')
    _onClick() {
        if (!this.fixed && this.open) {
            this.open = false;
        }
    }

    setActionsVisibility() {
        if (this.open) {
            this._childActions.show();
        } else {
            this._childActions.hide();
        }
    }

    private _setElementClass(elemClass:string , isAdd:boolean) {
        this.renderer.setElementClass(this.elementRef.nativeElement, `pip-${elemClass}`, isAdd);
    }
}