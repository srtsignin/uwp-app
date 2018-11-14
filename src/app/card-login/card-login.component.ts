import { Component, OnInit, NgZone } from '@angular/core';
import { CardLoginService } from './card-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  currentCardUID: string = "";

  constructor(private cardLoginService: CardLoginService, private zone: NgZone, private router: Router) {}

  ngOnInit() {
    console.log(this.cardLoginService);
    this.cardLoginService.subject.subscribe(([err, data]) => {
      console.log(data);
      this.zone.run(() => {
        this.currentCardUID = data;
      });
    });
  }

  handleForgotID() {
    this.router.navigate(['login']);
  }

}
