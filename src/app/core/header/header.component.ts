import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {

    this._AuthService.mySubject.subscribe(
      (data) => {
        if(data) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    )
  }

}
