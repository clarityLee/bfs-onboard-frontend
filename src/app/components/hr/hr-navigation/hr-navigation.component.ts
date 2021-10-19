import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hr-navigation',
  templateUrl: './hr-navigation.component.html',
  styleUrls: ['./hr-navigation.component.css']
})
export class HrNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

}
