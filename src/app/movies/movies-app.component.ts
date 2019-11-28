import { Component } from "@angular/core";

@Component({
  selector: "movies-app",
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `
})
export class MoviesAppComponent {
}
