import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtComponent implements OnInit {

  art: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/art').subscribe(data => {
      console.log(data);
      this.art = data;
    });
  }

}
