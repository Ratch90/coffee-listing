import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../../interfaces/coffee.interface';

@Component({
    selector: 'app-coffees-list',
    templateUrl: './coffees-list.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class CoffeesListComponent {
    coffeesList = input.required<Coffee[]>();
}
