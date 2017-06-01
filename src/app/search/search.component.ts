import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from '../http.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
  providers: [HttpService]
})
export class SearchComponent {

	search_query: string;
	search_result: Artist[];

	constructor(private httpService: HttpService) {}

  searchMusic() {
		this.httpService.searchMusic(this.search_query)
			.subscribe(
				res => {
					this.search_result = res.artists.items;
				})
  }

}
