import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  exports:[],
  imports:[
    RouterModule.forChild(ROUTES)
  ]

})

export class HomeModule {

}
