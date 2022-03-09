import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'users', component: UsersPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
