import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {

 
public  ingresar: string = ''
  constructor() { }

  ngOnInit() {
    return 0
  }

}
