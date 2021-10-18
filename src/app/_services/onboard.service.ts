import { Injectable } from '@angular/core';

import { Observable, of, Subscription, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OnboardService {
  private x = '';
  private y = '';

  constructor() {}

  set1(data: any) {
    console.log(data);
    this.x = data;
  }

  set2(data: any) {
    console.log(data);
    this.y = data;
  }

  get1() {
    return this.x;
  }
  get2() {
    return this.y;
  }
}
