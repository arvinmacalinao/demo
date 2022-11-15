import { Component } from '@angular/core';
import { now } from '@ionic/core/dist/types/utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  food = "Virtual Food";
  
  actionName = "Click Me!";
  isTrue = true;
  time = new Date();

  constructor() {



  }
  click(){
    this.isTrue = !this.isTrue;
  }
  
  
}
