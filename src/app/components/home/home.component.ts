import { Component } from '@angular/core';

import { HeaderComponent, MainContentComponent } from '../layout';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [HeaderComponent, MainContentComponent]
})
export class HomeComponent {}
