import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos: any[] = [];
  query = '';

  constructor(
    private _apiService: ApiService,
    private router: Router,
    private _searchService: SearchService
  ) { }

  ngOnInit(): void {
    this._apiService.getData().subscribe((data) => {
      this.videos = data;
    });
    this._searchService.query$.subscribe((query) => {
      this.query = query;
    });
  }

  onVideoSelect(video: any) {
    this.router.navigate(['/main', video.id]);
  }

  get filteredVideos() {
    if (!this.query || typeof this.query !== 'string') {
      return this.videos;
    }
    return this.videos.filter((video) =>
      video.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

}
