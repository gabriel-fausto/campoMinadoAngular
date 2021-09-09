import { Celula } from './../Celula';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class RevelarService {
  private subject = new Subject<Celula>();

  onRevelar(): Observable<Celula> {
    return this.subject.asObservable();
  }

  revelar(celula: Celula): void {
    this.subject.next(celula)
  }
}
