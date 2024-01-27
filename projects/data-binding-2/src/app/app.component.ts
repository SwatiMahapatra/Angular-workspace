import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-2';
  name="something";
  imgUrl='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  isDark=true;
  isMain=true;
  upCase="uppercase";
  myColor='blue';
  myMethod(){
    console.log("Hellooooooooooo Swati");
    if(this.isDark){
      this.isDark=false;
    }
    else{
      this.isDark=true;
    }
  }
  inp="";
  inputMethod(e:Event){
    this.inp=(e.target as HTMLInputElement).value;
    console.log(this.inp);
  }
}
