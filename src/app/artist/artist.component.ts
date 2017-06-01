import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from '../http.service';
import { Artist } from '../artist'
import { Album } from '../album'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])     
      .subscribe((id) => {
        this.httpService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;            
          })

        this.httpService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;            
          })
      })

  }

}
