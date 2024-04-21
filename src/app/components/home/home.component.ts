import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CoffeeShopInfoComponent, CoffeesListComponent, TabsComponent } from '..';
import { CoffeeListingService } from '../../services/coffee-listing.service';

import { Coffee } from '../../interfaces/coffee.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [CoffeeShopInfoComponent, CoffeesListComponent, TabsComponent, CommonModule]
})
export class HomeComponent {
    public coffeeListingService = inject(CoffeeListingService);

    coffeesListState = this.coffeeListingService.coffeesListState;

    allCoffees = toSignal<Coffee[], Coffee[]>(this.coffeeListingService.fetchAllCoffees(), { initialValue: [] });
    availableCoffees = computed(() => this.allCoffees().filter((coffee) => coffee.available));
}