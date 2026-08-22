import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    // NO ASYNC CODE HERE
    // Before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during the render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes); 
  }
}