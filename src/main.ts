import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { routes } from './app/app-routing.module';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideRouter(routes)
  ]
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
