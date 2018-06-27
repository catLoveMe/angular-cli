import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { ButtonComponent } from './button/button.component';
import { MComponent } from './m/m.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
registerLocaleData(localeFr, 'fr');

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    ProDetailComponent,
    Tab1Component,
    Tab2Component,
    ButtonComponent,
    MComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateHttpLoader),
          deps: [Http]
       }
   })
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
