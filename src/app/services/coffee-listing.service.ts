import { HttpClient } from '@angular/common/http';
import { Injectable, input, signal } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Coffee } from '../interfaces/coffee.interface';

export type CoffeeListState = 'all' | 'available';

@Injectable({
    providedIn: 'root'
})
export class CoffeeListingService {
    constructor(private httpClient: HttpClient) {}

    private coffeesListStateSignal = signal<CoffeeListState>('all');

    coffeesListState = this.coffeesListStateSignal.asReadonly();

    fetchAllCoffees(): Observable<Coffee[]> {
        return this.httpClient
            .get<
                Coffee[]
            >('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .pipe(shareReplay());
    }

    changeCoffeesListState(state: CoffeeListState) {
        this.coffeesListStateSignal.set(state);
    }
}
