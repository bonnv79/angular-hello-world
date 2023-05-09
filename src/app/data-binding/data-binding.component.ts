import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  user = {
    name: "Tiep Phan",
    age: 30,
  };

  showInfo() {
    alert("Inside Angular Component method");
  }
}
