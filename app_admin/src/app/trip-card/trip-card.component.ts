import { CommonModule } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-trip-card',
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input('trip') trip: any;

  constructor() { }

  ngOnInit(): void {

  }
}
