import { Component } from '@angular/core';
import { PhoneBook } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Ashish's PhoneBook";
  phonebook = new PhoneBook("Ashish","9999999999")
  getName() {
    return this.phonebook.name
  }
}
