import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtDetailComponent implements OnInit {

  art = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getArtDetail(this.route.snapshot.params['id']);
  }

  getArtDetail(id) {
    this.http.get('/art/'+id).subscribe(data => {
      this.art = data;
    });
  }

}
