import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      CSS con scope
    </p>
  `,
  styles: [
    `
    p{
      color:blue;
      font-size: 20px;
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
