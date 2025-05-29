import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent {
  bookingDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const state = history.state;
    this.bookingDetails = state.booking || {
      busName: '',
      from: '',
      to: '',
      date: '',
      time: '',
      seatNumbers: [],
      userName: '',
      phone: '',
      paymentMethod: ''
    };
  }
}
