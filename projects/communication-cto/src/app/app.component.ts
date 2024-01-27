import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communication-cto';
  msg='';
  fun2(m:any){
    this.msg=m;
  }
}
