import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-nba',
  templateUrl: './nba.page.html',
  styleUrls: ['./nba.page.scss'],
})

export class NbaPage implements OnInit {

  players: any = [];
 
  
  constructor(private http: HttpClient) {


  }
  ngOnInit(): void{
    this.http.get('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
    .subscribe(data=>{
      console.log(data);
      this.players = data;
    });
  }
  
}
