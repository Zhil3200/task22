import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.product = {
      description: 'string',
      id: 0,
      image: 'string',
      price: 0,
      title: 'string'
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/']).then();
            }
          });
      }
    })
  }

}
