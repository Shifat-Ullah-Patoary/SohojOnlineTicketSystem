import { Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { HomeComponent } from './home/home.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},

    {path:'bus-list',component:BusListComponent},

    {path:'seat-selection',component:SeatSelectionComponent},
    {
  path: 'booking-confirmation',
  loadComponent: () => import('./booking-confirmation/booking-confirmation.component').then(m => m.BookingConfirmationComponent)
}

];
