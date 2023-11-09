import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class WelcomeModule { }
