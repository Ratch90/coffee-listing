import { Component, input } from '@angular/core';
import { Coffee } from '../../../interfaces/coffee.interface';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-coffee-card',
    templateUrl: './coffee-card.component.html',
    standalone: true,
    imports: [NgStyle]
})
export class CoffeeCardComponent {
    coffee = input.required<Coffee>();
}
