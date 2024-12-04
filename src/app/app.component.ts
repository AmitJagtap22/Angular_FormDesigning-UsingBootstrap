import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InfoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssignment12';
}
