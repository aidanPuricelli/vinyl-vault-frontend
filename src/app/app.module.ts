import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { VinylCollectionComponent } from './vinyl-collection/vinyl-collection.component';
import { VinylService } from './vinyl.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoViewComponent } from './logo-view/logo-view.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginRegisterNavComponent } from './login-register-nav/login-register-nav.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ImageModalComponent } from './profile-page/image-modal/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VinylCollectionComponent,
    LogoViewComponent,
    FooterComponent,
    LoginRegisterComponent,
    HomeComponent,
    LoginComponent,
    LoginRegisterNavComponent,
    RegisterComponent,
    ProfilePageComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VinylService],
  bootstrap: [AppComponent]
})
export class AppModule { }
