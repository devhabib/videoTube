import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoWatchComponent } from './components/video-watch/video-watch.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'main/:id', component: VideoWatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
