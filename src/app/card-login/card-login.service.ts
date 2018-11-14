import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
declare var window: any;

@Injectable()
export class CardLoginService {

  private adapter;
  public subject: Subject<[any, string]> = new Subject<[any, string]>();

  constructor() { 
    const pcsc = window.require('pcsclite')();
    const PCSCAdapter = window.require('@srtsignin/pcsc-adapter');
    this.adapter = new PCSCAdapter(pcsc);
    this.adapter.subscribe((err, data) => {
      this.subject.next([err, data]);
    });
  }
}
