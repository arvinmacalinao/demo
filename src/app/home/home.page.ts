import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { now } from '@ionic/core/dist/types/utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  // food = "Virtual Food";
  // actionName = "Click Me!";
  // isTrue = true;
  // time = new Date();

  films: any = [];

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void{
    this.http.get('https://ghibliapi.herokuapp.com/films')
    .subscribe(data=>{
      console.log(data);
      this.films = data;
    });
  }
  
  // click(){
  //   this.isTrue = !this.isTrue;
  // }
  
}
