import { Overview } from '@/app/components/dashboard/overview/overview';
import { Header } from '@/app/components/shared/header/header';
import { Navbar } from '@/app/components/shared/navbar/navbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbar, Overview],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
