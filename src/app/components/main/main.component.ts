import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  videos: any[] = [];
  filteredVideos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.videos = data;
      this.filteredVideos = data;
    });
  }

  performSearch(searchTerm: string): void {
    this.filteredVideos = this.videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  navigateToVideo(videoId: string): void {
    this.router.navigate(['/video', videoId]);
  }
}
