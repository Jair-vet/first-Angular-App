import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increasyBy(+1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increasyBy(-1)">-1</button>
    `
})

export class CounterComponent {
    constructor() { }
    public title: string = 'Hola Mundo';
    public counter: number = 10;
  
    increasyBy( value: number ):void {
      this.counter += value
    }
  
    resetCounter() {
      this.counter = 10 
    }
}