import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HomeComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {}
