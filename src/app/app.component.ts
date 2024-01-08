import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { StatsComponent } from './stats/stats.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlsComponent, MapComponent, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TPE reloaded with Angular';
}
