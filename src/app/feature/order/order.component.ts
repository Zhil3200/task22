import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CustomValidators} from "../../shared/validators/custom-validators";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private subscriptionProduct: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  isFormDisplay: boolean = true;
  isFormError: boolean = false;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[а-яА-Я]*')]),
    last_name: new FormControl('', [Validators.required, Validators.pattern('[а-яА-Я]*')]),
    phone: new FormControl('', [Validators.required, CustomValidators.phoneValidator]),
    country: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    product: new FormControl({value: '', disabled: true}),
    address: new FormControl('', [Validators.required, Validators.pattern('[0-9а-яА-Я\\- \\/\\\\]*')]),
    comment: new FormControl(''),
  }, {validators: Validators.required});
  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.subscriptionProduct = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: 'Чаяная коллекция: ' + params['product']
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionProduct?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  createOrder() {
    const dataOrder = this.orderForm.value;
    dataOrder.product = this.product?.value;

    this.subscriptionOrder = this.http.post<{ success: boolean, message?: string }>('https://testologia.ru/order-tea', dataOrder)
      .subscribe(response => {
      if (!response.success && response.message) {
        this.isFormDisplay = true;
        this.isFormError = true;
      } else {
        this.isFormDisplay = false
        this.isFormError = false;
      }
    });
  }

  get name() {
    return this.orderForm.get('name');
  }
  get last_name() {
    return this.orderForm.get('last_name');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get address() {
    return this.orderForm.get('address');
  }
  get country() {
    return this.orderForm.get('country');
  }
  get zip() {
    return this.orderForm.get('zip');
  }
  get product() {
    return this.orderForm.get('product');
  }

}
