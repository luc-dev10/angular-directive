import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  previousPage() {
    if (this.currentPage > this.products.minPage) this.currentPage--;
  }
  nextPage() {
    if (this.currentPage < this.products.maxPage) this.currentPage++;
  }

  products = {
    items: [
      {
        title: 'Night Lamp',
        price: 19.99,
        description: 'A Simple night lamp to lighten your nights.',
        page: 0,
      },
      {
        title: 'Desk',
        price: 99.99,
        description: 'Great for your studies and work.',
        page: 0,
      },
      {
        title: 'Chair',
        price: 42.99,
        description: 'Sit tight with this product.',
        page: 1,
      },
      {
        title: 'Mouse',
        price: 56,
        description:
          'Scroll, slice up and down. This mouse will help you surf and navigate the web.',
        page: 1,
      },
      {
        title: 'Wall Charger Extension',
        price: 9.99,
        description: 'Always have enough plugs for your devices.',
        page: 2,
      },
      {
        title: 'Keyboard',
        price: 55.4,
        description:
          'Hav the greatest keyboard wars online. With this keyboard, your enemies will think twice before typing.',
        page: 2,
      },
      {
        title: 'Coffee Cup',
        price: 12.99,
        description: 'Great product for your daily coffee.',
        page: 3,
      },
      {
        title: 'Mouse',
        price: 56,
        description:
          'Scroll, slice up and down. This mouse will help you surf and navigate the web.',
        page: 3,
      },
      {
        title: 'Bag of Air',
        price: 12.99,
        description:
          'For the warm summers, a bag air will help you improve your day.',
        page: 4,
      },
      {
        title: 'Garbage bin',
        price: 21.0,
        description:
          'Disposable garbage bin. Use it once and throw it away. Buy more.',
        page: 4,
      },
      {
        title: 'Binder',
        price: 3.99,
        description:
          'Great product for your school load. Our binders offer durability at a discounted price.',
        page: 5,
      },
      {
        title: 'Trackpad',
        price: 56,
        description:
          'Scroll, slice up and down. This mouse will help you surf and navigate the web.',
        page: 5,
      },
      {
        title: 'Bag of Air',
        price: 12.99,
        description:
          'For the warm summers, a bag air will help you improve your day.',
        page: 6,
      },
      {
        title: 'Garbage bin',
        price: 21.0,
        description:
          'Disposable garbage bin. Use it once and throw it away. Buy more.',
        page: 6,
      },
      {
        title: 'Night Lamp',
        price: 19.99,
        description: 'A Simple night lamp to lighten your nights.',
        page: 7,
      },
      {
        title: 'Desk',
        price: 99.99,
        description: 'Great for your studies and work.',
        page: 7,
      },
      {
        title: 'Chair',
        price: 42.99,
        description: 'Sit tight with this product.',
        page: 8,
      },
      {
        title: 'Mouse',
        price: 56,
        description:
          'Scroll, slice up and down. This mouse will help you surf and navigate the web.',
        page: 8,
      },
      {
        title: 'Wall Charger Extension',
        price: 9.99,
        description: 'Always have enough plugs for your devices.',
        page: 9,
      },
      {
        title: 'Keyboard',
        price: 55.4,
        description:
          'Have the greatest keyboard wars online. With this keyboard, your enemies will think twice before typing.',
        page: 9,
      },
    ],
    maxPage: 9,
    minPage: 0,
    pageNums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
}
