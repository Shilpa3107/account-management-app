// account-info.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  accountInfo: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchAccountInfo();
  }

  fetchAccountInfo() {
    this.accountInfo = this.authService.getAccountInfo();
  }
}
