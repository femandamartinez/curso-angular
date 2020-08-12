import { Component, OnInit} from '@angular/core';
import {from, fromEvent} from 'rxjs';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'curso-angular';
    persons = [{
      name: 'martina',
      lastName: 'fernandez',
      age: 11,
      enable: false},{
      name: 'marco',
      lastName: 'martinez',
      age: 12,
      enable: false},{
      name: 'maria',
      lastName: 'marcos',
      age: 13,
      enable: true},{
      name: 'marta',
      lastName: 'martins',
      age: 14,
      enable: true
    }]
  sw = true;

  personas = ['mar', 'maria', 'marco', 'marina']
  aux = 6
  auxColor = 'blue';
  auxClass = true;
  ngOnInit () {
    const array = from ([1,2,3,4,5,6]);
    array.subscribe (a => console.log('item: ', a) )
    const aux = fromEvent (document, 'mousemove');
    aux.subscribe((a:any) => console.log('event: ' + a.clientX + ', ' + a.clientY));
  }
}
