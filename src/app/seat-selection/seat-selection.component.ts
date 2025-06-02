import { Component, OnInit } from '@angular/core';
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
export class SeatSelectionComponent implements OnInit {
  busName = '';
  seats: { label: string; selected: boolean }[] = [];
  selectedSeats: string[] = [];

  from = '';
  to = '';
  date = '';

  user = {
    name: '',
    phone: '',
    payment: ''
  };

  rows: { left: { label: string; selected: boolean }[]; right: { label: string; selected: boolean }[] }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.busName = this.route.snapshot.queryParamMap.get('bus') || '';
    this.from = this.route.snapshot.queryParamMap.get('from') || '';
    this.to = this.route.snapshot.queryParamMap.get('to') || '';
    this.date = this.route.snapshot.queryParamMap.get('date') || '';

    const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.seats = [];
    this.rows = [];

    rowLabels.forEach(row => {
      const left = [
        { label: `${row}1`, selected: false },
        { label: `${row}2`, selected: false }
      ];
      const right = [
        { label: `${row}3`, selected: false },
        { label: `${row}4`, selected: false }
      ];
      this.rows.push({ left, right });
      this.seats.push(...left, ...right);
    });
  }

  toggleSeat(seat: { label: string; selected: boolean }) {
    seat.selected = !seat.selected;
    this.selectedSeats = this.seats
      .filter(s => s.selected)
      .map(s => s.label);
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
          from: this.from,
          to: this.to,
          date: this.date,
          time: '10:00 AM', 
          busName: this.busName,
          seatNumbers: this.selectedSeats,
          paymentMethod: this.user.payment
        }
      }
    });
  }
}