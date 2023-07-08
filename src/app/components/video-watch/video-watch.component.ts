import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-video-watch',
  templateUrl: './video-watch.component.html',
  styleUrls: ['./video-watch.component.scss']
})
export class VideoWatchComponent implements OnInit {
  video: any;
  constructor(private _apiService: ApiService, private route: ActivatedRoute,) {
    console.log('VideoWatchComponent instantiated');

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this._apiService.getData().subscribe(videos => {
      this.video = videos.find(video => video.id === id);
      console.log(this.video);
    });
  }

}
