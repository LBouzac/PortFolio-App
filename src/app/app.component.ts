import { Component } from '@angular/core';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchbarComponent,
    IndexComponent,
    // AboutMeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  $search: String = "";

  increaseCount() {
    this.count ++;
  }
}
