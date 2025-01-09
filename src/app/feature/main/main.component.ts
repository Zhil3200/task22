import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
declare var $: any;
@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public isPopupOpen: boolean = false;
  private isPopupOpen$: Observable<boolean>;
  private subscription: Subscription | null = null;
  constructor() {
    this.isPopupOpen$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 10000)
    });
  }

  ngOnInit(): void {
    $("#accordion").accordion({
      heightStyle: "content"
    });

    this.subscription = this.isPopupOpen$.subscribe((param: boolean) => {
      this.isPopupOpen = param;
    })
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  closePopup() {
    this.isPopupOpen = false;
    this.subscription?.unsubscribe();
  }

}
