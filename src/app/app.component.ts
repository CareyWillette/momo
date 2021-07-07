import { Component } from '@angular/core';

export interface MenuSection {
  title?: string;
  items?: Item[];
}

export interface Item {
  name?: string;
  price?: number;
  description?: string;
  allergyIcon?: string;
}

@Component({
  selector: 'momo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Momo';

  menu: MenuSection[] = [
    {
      "title": "Sides & Sips",
      "items": [
        {
          "name": "Momos",
          "price": 1.50,
          "description": "Steamed spiced ground beef dumpling"
        },
        {
          "name": "Chai Tea",
          "price": 2.25,
          "description": "A homemade brew of brook bond tea and spice made daily, not too sweet not too spicy and perfect balance. (8 oz)"
        },
        {
          "name": "Soda",
          "price": 1.50,
          "description": "Sweet water"
        },
      ]
    },
    {
      "title": "Entrees",
      "items": [
        {
          "name": "The Momo Plate",
          "price": 10,
          "description": "Six steamed momos served with potato and a hot or mild dipping sauce."
        },
        {
          "name": "The Combo Plate",
          "price": 15,
          "description": "Curried lentils and curried beef served over basmati rice with potato and 2 momos (includes hot or mild dipping sauce)."
        },
        {
          "name": "The Tashi Delek",
          "price": 12,
          "description": "Similar to the combo plate - without the momos"
        },
        {
          "name": "Rice Plate",
          "price": 9,
          "description": "Mild curried lentils served over basmati rice with potato, a simple vegetarian meal.",
          "allergyIcon": "v"
        }
      ]
    }
  ];

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
  ]
  
}
