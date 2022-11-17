import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})

export class FilmsPage implements OnInit{

  films: any = [];
  public filmSub: Subscription = new Subscription();

  constructor(
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.filmSub.add(
      this.filmService.getFilms().subscribe(
        result=>{
          this.films = result;
        },
        error=>{
          console.log(error);
          
        }
        )
    );
  }
}
