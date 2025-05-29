import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  route = inject(ActivatedRoute);

  from = '';
  to = '';
  date = '';

  filteredBuses: any[] = [];

  buses = [
    { name: 'Green Line', from: 'Dhaka', to: 'Chittagong', time: '08:00', price: 700 },
    { name: 'Shyamoli', from: 'Dhaka', to: 'Sylhet', time: '09:00', price: 600 },
    { name: 'Hanif', from: 'Dhaka', to: 'Chittagong', time: '10:00', price: 650 },
    {name: 'Soudia', from: 'Dhaka', to: 'Rajshahi', time: '11:00', price: 800 },
    { name: 'Ena', from: 'Dhaka', to: 'Cox\'s Bazar', time: '12:00', price: 900 },
    { name: 'Desh Travels', from: 'Dhaka', to: 'Barisal', time: '13:00', price: 750 },
    { name: 'TR Travels', from: 'Dhaka', to: 'Khulna', time: '14:00', price: 850 },
    { name: 'Sakura Travels', from: 'Dhaka', to: 'Mymensingh', time: '15:00', price: 700 },
    { name: 'Sky Travel', from: 'Dhaka', to: 'Narayanganj', time: '16:00', price: 600 },
    { name: 'Hanif Enterprise', from: 'Dhaka', to: 'Tangail', time: '17:00', price: 500 },
    { name: 'Green Line Paribahan', from: 'Dhaka', to: 'Chittagong', time: '18:00', price: 700 },
    { name: 'Shyamoli Paribahan', from: 'Dhaka', to: 'Noakhali', time: '19:00', price: 800 },
    {name:'StarLine',from:'Dhaka',to:'Feni',time:'6:30',price:430},
    {name:'Sundarban',from:'Dhaka',to:'Bogra',time:'7:30',price:500}
  ];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = (params['from'] || '').trim().toLowerCase();
      this.to = (params['to'] || '').trim().toLowerCase();
      this.date = params['date'] || '';

      this.filterBuses();
    });
  }

  filterBuses() {
    this.filteredBuses = this.buses.filter(bus =>
      bus.from.toLowerCase() === this.from &&
      bus.to.toLowerCase() === this.to
    );
  }
  constructor(private router:Router){}

  selectBus(busName: string) {
  this.router.navigate(['/seat-selection'], {
    queryParams: { bus: busName }
  });
}

}
