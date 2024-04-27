import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const modules = [HttpClientModule, CommonModule];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), importProvidersFrom(...modules)]
};
