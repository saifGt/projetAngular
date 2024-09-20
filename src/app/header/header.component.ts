import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    Q = 1
    color= 'red'

    user=[
      {name : 'john', age : 28, quantité : 2},
      {name : 'balsem',age : 21,quantité : 0}
    ]

    sayHello(){
      console.log('Hello');
    }

  

    getColor(){

      if(this.Q>10)
        return 'red'
      else return 'green'

    }

    changeColler(){
      this.color = 'blue'
    }

}
