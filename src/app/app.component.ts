import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CustomerReview } from './models/customer-reviews.model';
import { MenuSection } from './models/menu.model';

@Component({
  selector: 'momo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menu$: Observable<MenuSection[]>;

  customerReviews$: Observable<CustomerReview[]>;

  title = 'Momo';
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMenu().subscribe(
      res => console.log('%c menu data: ', 'background: #41ff6b; color: #ff4700;', res)
    )

    this.menu$ = this.dataService.getMenu();

    this.customerReviews$ = this.dataService.getCustomerReviews();

    this.customerReviews$.subscribe(
      _ => console.log('%c app component -> customer reviews: ', 'background: #41ff6b; color: #ff4700;', _)
    )
  }


  contactSection = [
    {
      title: 'Location',
      items: [
        '303 Elk Ave,',
        'Crested Butte, CO 81224',
        'The entrance is on the SW side of the building.'
      ]
    },
    {
      title: 'Hours',
      items: [
        'Mon-Fri: 12:00 PM - 3:00 PM',
        'Sat-Sun: Closed',
        'Hours are subject to change during the off season'
      ]
    }
  ];

  
  
}
