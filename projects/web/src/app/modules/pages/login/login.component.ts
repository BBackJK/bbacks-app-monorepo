import { Component, OnInit } from '@angular/core';

// declare let Kakao: any;

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
    // console.log(Kakao)
  }

  loginWithKakao(): void {
    const $this = this;

  }
}
