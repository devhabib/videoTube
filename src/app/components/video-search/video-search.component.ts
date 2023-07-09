import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent {
  @Output() search = new EventEmitter<string>();
  query = '';

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.query.trim() !== '') {
      this.search.emit(this.query.trim());
    }
  }
}
