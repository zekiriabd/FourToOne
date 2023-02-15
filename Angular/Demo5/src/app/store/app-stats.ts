import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppState {
  private ids$ = new BehaviorSubject<Array<number>>([]);
  private ids!:number[];

  public getIds (){ 
    return this.ids$.asObservable();
  }

  public setIds(id:number): void { 
    this.ids$.subscribe(x => this.ids=x);
    this.ids.push(id);
    this.ids$.next(this.ids);
  }
}