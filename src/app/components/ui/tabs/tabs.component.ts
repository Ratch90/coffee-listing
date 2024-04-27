import { Component, inject } from '@angular/core';
import { CoffeeListState, CoffeeListingService } from '../../../services/coffee-listing.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [NgClass]
})
export class TabsComponent {
    private coffeeListingService = inject(CoffeeListingService);

    availabilityState = this.coffeeListingService.coffeesListState;

    handleCoffeeListStateChange(state: CoffeeListState) {
        this.coffeeListingService.changeCoffeesListState(state);
    }
}
