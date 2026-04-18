import { Component,EventEmitter,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-details',
  imports: [FormsModule],
  standalone: true, 
  templateUrl: './laptop-details.html',
  styleUrl: './laptop-details.css',
})
export class LaptopDetails {
  @Input() laptopDetails:any;
  // @Output() onupdate = new EventEmitter<any>();
  brandHighlighted=false;
  priceHighlighted=false;
}



