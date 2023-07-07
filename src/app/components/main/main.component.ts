import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any;
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.getApiContent()
  }
  getApiContent(): void {
    this._api.getData().subscribe({
      next: (res) => {
        this.data = res;
        console.log(res);
      }
    });
  }

}