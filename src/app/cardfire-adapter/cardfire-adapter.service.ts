import { Injectable, Inject } from '@angular/core';
import { UserBuilder } from '../model/user-builder';
import { API_URL } from '../api/api.module';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardfireAdapterService {

  private API_URL: string;

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url;
  }

  signIn(cardUID): Promise<[any, UserBuilder, string]> {
    return new Promise((resolve, reject) => {
      console.log(`Verifying cardUID: ${cardUID}`);
      this.http.get(this.API_URL + '/cardfire/verify', {
        headers: new HttpHeaders().set('CardfireToken', cardUID)
      }).subscribe((response: any) => {
        console.log(`cardUID verified!`);
        const userBuilder = new UserBuilder().fullname(response.user.name).username(response.user.username).token(cardUID);
        resolve([null, userBuilder, cardUID]);
      }, error => {
        console.log(`Unknown cardUID: ${cardUID}`)
        resolve([error, null, null]);
      });
    });
  }

  registerCard(rosefireToken, cardfireToken): Observable<any> {
    return this.http.post(this.API_URL + '/cardfire/token', {
      cardNumber: cardfireToken
    }, {
      headers: new HttpHeaders().set('RosefireToken', rosefireToken).set('Content-Type', 'application/json')
    });
  }
}
