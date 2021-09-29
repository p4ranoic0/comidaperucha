import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { BannerComponent } from './home/banner/banner.component';
import { ExploreComponent } from './home/explore/explore.component';
import { TrendingComponent } from './home/trending/trending.component';
import { FeaturesComponent } from './home/features/features.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { BlogsComponent } from './home/blogs/blogs.component';

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
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
