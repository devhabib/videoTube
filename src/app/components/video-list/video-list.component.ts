import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos: any[] = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData()
      .subscribe(data => this.videos = data);
  }
}
