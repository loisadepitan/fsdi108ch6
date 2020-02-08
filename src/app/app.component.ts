import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name ="Lois"
  userName = "";
  calculate(){
    console.log("Input val:",this.userName);
  }

  clear(){
    this.userName ="";
  }

  test(){
    console.log("User clicked the button");
    this.name = 'This is really cool!!';
  }
}


