import { Overview } from '@/app/components/dashboard/overview/overview';
import { Table } from '@/app/components/dashboard/table/table';
import { Header } from '@/app/components/shared/header/header';
import { Navbar } from '@/app/components/shared/navbar/navbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbar, Overview, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
