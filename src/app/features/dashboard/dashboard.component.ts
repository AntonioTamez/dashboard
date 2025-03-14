import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  toggleDarkMode(): void {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
  }

}
