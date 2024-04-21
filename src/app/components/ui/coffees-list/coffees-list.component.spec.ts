/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffeesListComponent } from './coffees-list.component';

describe('CoffeesListComponent', () => {
    let component: CoffeesListComponent;
    let fixture: ComponentFixture<CoffeesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoffeesListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoffeesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
