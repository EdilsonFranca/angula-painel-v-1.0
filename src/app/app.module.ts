import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID , NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AlertModule } from './shared/components/alert/alert.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AlertModule,
    ChartsModule
  ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt'},
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
