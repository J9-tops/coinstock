import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('trade-scope');

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
