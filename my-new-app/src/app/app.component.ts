import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `h1 {
        color: red;
    }
    `
  ]
  
})
export class AppComponent {

showSecret= false
buttonText = "revealSecret"
revealSecret(){
    this.showSecret = !this.showSecret
    if (this.showSecret ===true) {
        this.buttonText = "hideSecret"
    }else {
        this.buttonText = "revealSecret"
    }
}
}
