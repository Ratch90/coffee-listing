import { Component, input } from '@angular/core';
import { Coffee } from '../../../interfaces/coffee.interface';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';

@Component({
    selector: 'app-coffees-list',
    templateUrl: './coffees-list.component.html',
    standalone: true,
    imports: [CoffeeCardComponent]
})
export class CoffeesListComponent {
    coffeesList = input.required<Coffee[]>();
}
