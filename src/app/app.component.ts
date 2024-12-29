import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {TreeComponent} from './tree/tree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    DashboardComponent,
    TableComponent,
    TreeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
