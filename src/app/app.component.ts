import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-App';
  counter: any;

  constructor(private _store:Store<{counter:{counter:number}}>){

  }
  ngOnInit(){
    this._store.select('counter').subscribe(data=>{
      this.counter=data.counter;
    })
  }
}
