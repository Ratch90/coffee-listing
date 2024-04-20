import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeShopInfoComponent } from './components/';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CoffeeShopInfoComponent, CommonModule],
    templateUrl: './app.component.html'
})
export class AppComponent {}
