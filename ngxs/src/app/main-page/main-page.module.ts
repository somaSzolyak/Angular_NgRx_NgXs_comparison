import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    UsersPageComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  exports: [
    HomePageComponent,
    UsersPageComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent
  ]
})
export class MainPageModule { }
