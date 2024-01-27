import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
  name:String ="Swati Mahapatra";
  course:String= "Angular 16 & 17";
  photo:String = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  isGood:boolean =false;
  getGreentings(){
    return "Hello Hey! Bye Bye";
  }
  isDisabled =false;
  isHeading = true;
}
