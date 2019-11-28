import { Component } from "@angular/core"

@Component({
  template: `
    <div class="error">
      <h1>Error '404'</h1>
      <span>page not found</span>
    </div>
  `,
  styles: [`
    .error{
      margin-top: 100px
    }
    h1{
      font-size: 150px
    }
    span{
      font-size: 80px
    }
  `]
})

export class Error404Component {

}
