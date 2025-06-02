import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    { name: 'Bus Tickets', icon: '🚌', description: 'Book tickets from 100+ operators' },
    { name: 'Train Tickets', icon: '🚆', description: 'Official railway ticket partner' },
    { name: 'Air Tickets', icon: '✈️', description: 'Domestic & international flights' },
    { name: 'Launch Tickets', icon: '🚢', description: 'Safe waterway journeys' },
    { name: 'Event Tickets', icon: '🎫', description: 'Concerts, sports & more' }
  ];

  constructor(private router: Router) {}

  from = '';
   to = '';
  date = '';


 goToBusList() {
  this.router.navigate(['/bus-list'], {
    queryParams: {
      from: this.from,
      to: this.to,
      date: this.date
    }
  });
}

}
