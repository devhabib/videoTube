import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoWatchComponent } from './components/video-watch/video-watch.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoWatchComponent,
    VideoListComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
