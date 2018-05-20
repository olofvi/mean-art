import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtCreateComponent implements OnInit {

  art = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveArt() {
    this.http.post('/art', this.art)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/art-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
