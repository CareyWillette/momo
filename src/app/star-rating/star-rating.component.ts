import { Component, Input, OnInit } from '@angular/core';
import { CustomerReview } from '../models/customer-reviews.model';

@Component({
  selector: 'momo-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {

  @Input() rating: CustomerReview;

  constructor() {}

  ngOnInit(): void {
    this.rating.stars = this.rating.stars.map((star) => {
      if (star.id <= this.rating.selectedRating) {
        star.class = 'star-gold star';
      }
      else {
        star.class = 'star-gray star';
      }
      return star;
    });
    console.log(
      '%c feedback: ',
      'background: #41ff6b; color: #ff4700;',
      this.rating
    );
  }
  
}
