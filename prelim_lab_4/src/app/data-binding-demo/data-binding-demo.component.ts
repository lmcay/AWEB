import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message = "My First App!"
  description = "This is my new Angular Application"
  imageUrl = '../assets/cat.jpeg';
  w = 50;
  h = 50;
  altText = 'Cat Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';
  count = 0;
  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
}
