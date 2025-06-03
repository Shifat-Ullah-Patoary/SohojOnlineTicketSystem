import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BuslistService } from '../service/busservice/buslist.service';


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

   constructor(private router: Router, private busService: BuslistService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.from = (params['from'] || '').trim()
      this.to = (params['to'] || '').trim()
      this.date = params['date'] || '';

      this.searchBuses();
    });
  }

  searchBuses() {
    this.busService.searchBuses(this.from, this.to).subscribe({
      next: (buses) => {
        this.filteredBuses = buses;
      },
      error: (err) => {
        console.error('Error fetching buses:', err);
      },
    });
  }

  selectBus(busName: string, busTime:string, busPrice:string) {
    this.router.navigate(['/seat-selection'], {
      queryParams: { bus: busName ,
        time:busTime,
        price:busPrice,
        from: this.from,
      to: this.to,
      date: this.date
      },
    });
  }
}