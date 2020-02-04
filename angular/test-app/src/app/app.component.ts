import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// export class AppComponent {
//   title = 'test-app';
// }

export class AppComponent {
  title = 'myApp';
  model = new Model();
  getName() {
    return this.model.user;
  }  
  getItems() {
    return this.model.items;
  }
  addItem(item){
    // this.model.items.push(new TodoItem(item, false));
    this.model.items.push({action:item, done:false});

  }
}
