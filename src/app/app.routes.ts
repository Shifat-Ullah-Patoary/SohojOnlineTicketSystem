import { Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { HomeComponent } from './home/home.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}, // Redirect empty path to login
    {path:'home',component:HomeComponent},
    {path:'bus-list',component:BusListComponent},
    {path:'seat-selection',component:SeatSelectionComponent},
    {
        path: 'booking-confirmation',
        component:BookingConfirmationComponent
    },
    {path:'login',component:LoginComponent},
];
