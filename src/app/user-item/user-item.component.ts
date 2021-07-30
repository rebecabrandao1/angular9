import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  names: string[]; // <-- added name property

  constructor() {
    this.names = ['Rebeca', 'Lili', 'Floquinho', 'Bubu'];// set the name
   }

  ngOnInit(): void {
  }

}
