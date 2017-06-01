import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from '../http.service';
import { Album } from '../album'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])     
      .subscribe((id) => {
        this.httpService.getAlbum(id)
          .subscribe(album => {
            this.album = album;            
          })
    })
  }

}
