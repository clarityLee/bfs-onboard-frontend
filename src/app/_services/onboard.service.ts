import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OnboardService {
  constructor(private http: HttpClient) {}

  sendOnboard() {}
}
