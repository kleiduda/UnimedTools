import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})
export class ConfirmMailComponent implements OnInit {

  currentYear!: number;
  constructor () { }

  ngOnInit(): void {
    this.currentYear = Date.now();
  }

}
