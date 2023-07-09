import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videoTube';
  query = '';
  constructor(private _searchService: SearchService) { }

  onSearch(query: string) {
    this.query = query;
  }
}
