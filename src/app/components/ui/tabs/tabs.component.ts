import { Component, inject } from '@angular/core';
import { CoffeeListState, CoffeeListingService } from '../../../services/coffee-listing.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true
})
export class TabsComponent {
    private coffeeListingService = inject(CoffeeListingService);

    handleCoffeeListStateChange(state: CoffeeListState) {
        this.coffeeListingService.changeCoffeesListState(state);
    }
}
