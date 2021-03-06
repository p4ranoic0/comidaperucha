import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { BannerComponent } from './home/banner/banner.component';
import { ExploreComponent } from './home/explore/explore.component';
import { TrendingComponent } from './home/trending/trending.component';
import { FeaturesComponent } from './home/features/features.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MotosComponent } from './motos/motos.component';
import { ServiciosphpComponent } from './serviciosphp/serviciosphp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    BannerComponent,
    ExploreComponent,
    TrendingComponent,
    FeaturesComponent,
    TestimonialComponent,
    BlogsComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    MotosComponent,
    ServiciosphpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
