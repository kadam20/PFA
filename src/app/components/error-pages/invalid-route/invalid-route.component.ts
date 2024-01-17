import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invalid-route.component.html',
  styleUrl: './invalid-route.component.scss',
})
export class InvalidRouteComponent implements OnInit {
  countdown: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.countdown = 10;
    this.countdownTimer();
  }

  countdownTimer() {
    if (this.countdown > 0) {
      setTimeout(() => {
        this.countdown = this.countdown - 1;
        this.countdownTimer();
      }, 1000);
    } else {
      this.router.navigate(['']);
      return;
    }
  }
}
