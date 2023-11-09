import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { WelcomeModule } from './home/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    WelcomeModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
