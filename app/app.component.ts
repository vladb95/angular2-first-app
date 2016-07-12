import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'first-app',
  template: `<h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><input value="{{hero.name}}" placeholder="name"></div>`
})
export class AppComponent {

  title = 'Tour of Heroes';
  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };

  constructor() { }

}
