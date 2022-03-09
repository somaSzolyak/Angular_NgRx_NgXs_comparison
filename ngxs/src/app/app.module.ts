import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainPageModule,
    NgxsModule.forRoot([], {
      developmentMode: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
