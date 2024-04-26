import { Component, input } from '@angular/core';
import { Coffee } from '../../../interfaces/coffee.interface';

@Component({
    selector: 'app-coffee-card',
    templateUrl: './coffee-card.component.html',
    standalone: true
})
export class CoffeeCardComponent {
    coffee = input.required<Coffee>();
}
