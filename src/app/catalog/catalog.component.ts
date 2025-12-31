import { Component } from '@angular/core';
import { IProduct } from './product.model';
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Head Friendly',
        description: 'A friendly head for your robot',
        price: 100,
        imageName: 'head-friendly.png',
        category: 'head',
        discount: 20
      },
      {
        id: 2,
        name: 'Head Big Eye',
        description: 'A big eye head for your robot',
        price: 100,
        imageName: 'head-big-eye.png',
        category: 'head',
        discount: 20
      },
      {
        id: 3,
        name: 'Head Shredder',
        description: 'A shredder head for your robot',
        price: 100,
        imageName: 'head-shredder.png',
        category: 'head',
        discount: 20
      },
      {
        id: 4,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 5,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 6,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 7,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 8,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 9,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 10,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 11,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 12,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 13,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 14,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 15,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 16,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 17,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 18,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 19,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      },
      {
        id: 20,
        name: 'Arm Articulated Claw',
        description: 'An articulated claw arm for your robot',
        price: 100,
        imageName: 'arm-articulated-claw.png',
        category: 'arm',
        discount: 20
      }
    ];
  }
  getProductImageUrl(product: IProduct): string {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}