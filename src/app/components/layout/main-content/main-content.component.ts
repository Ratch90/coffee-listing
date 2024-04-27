import { Component, computed, inject } from '@angular/core';
import { CoffeeListingService } from '../../../services/coffee-listing.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Coffee } from '../../../interfaces/coffee.interface';
import { CoffeeShopInfoComponent, CoffeesListComponent, TabsComponent } from '../../ui';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    standalone: true,
    imports: [CoffeeShopInfoComponent, TabsComponent, CoffeesListComponent]
})
export class MainContentComponent {
    private coffeeListingService = inject(CoffeeListingService);

    coffeesListState = this.coffeeListingService.coffeesListState;
    allCoffees = toSignal<Coffee[], Coffee[]>(this.coffeeListingService.fetchAllCoffees(), { initialValue: [] });
    availableCoffees = computed(() => this.allCoffees().filter((coffee) => coffee.available));
}
