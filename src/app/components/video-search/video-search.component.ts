import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent {
  @Output() search = new EventEmitter<string>();
  query = '';

  onSubmit() {
    this.search.emit(this.query);
  }
}
