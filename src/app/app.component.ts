import { Component } from '@angular/core';
import { BackgroundComponent } from './components/environment/background/background.component';

@Component({
  selector: 'app-root',
  imports: [
    BackgroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
