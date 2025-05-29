import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  busName = '';
  seats: { number: number; selected: boolean }[] = [];
  selectedSeats: number[] = [];

  user = {
    name: '',
    phone: '',
    payment: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.busName = this.route.snapshot.queryParamMap.get('bus') || '';
    this.seats = Array.from({ length: 32 }, (_, i) => ({ number: i + 1, selected: false }));
  }

  toggleSeat(seat: any) {
    seat.selected = !seat.selected;
    this.selectedSeats = this.seats.filter(s => s.selected).map(s => s.number);
  }

 confirmBooking() {
  console.log('Booking function triggered');
  if (!this.user.name || !this.user.phone || !this.user.payment || this.selectedSeats.length === 0) {
    alert('Please fill out all fields and select at least one seat.');
    return;
  }

  this.router.navigate(['/booking-confirmation'], {
    state: {
      booking: {
        userName: this.user.name,
        phone: this.user.phone,
        from: this.route.snapshot.queryParamMap.get('from'),
        to: this.route.snapshot.queryParamMap.get('to'),
        date: this.route.snapshot.queryParamMap.get('date'),
        time: '10:00 AM', // or dynamically from selected bus if available
        busName: this.busName,
        seatNumbers: this.selectedSeats,
        paymentMethod: this.user.payment
      }
    }
  });
}

}


  

