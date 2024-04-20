import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

const modules = [HttpClientModule];

const appConfig: ApplicationConfig = {
    providers: [importProvidersFrom(...modules)]
};

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
