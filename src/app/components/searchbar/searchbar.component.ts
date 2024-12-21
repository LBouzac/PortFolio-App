import {Component, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [
    FormsModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  search = model<string>('Tet');

  searchButtonClicked = output();

  searchClick() {
      this.searchButtonClicked.emit();
  }
}
