import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../store/counterAction';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
constructor(private _store:Store<{counter:{counter:number}}>){

}

increament(){
  this._store.dispatch(increament())
}
decreament(){
  this._store.dispatch(decreament())
}
reset(){
  this._store.dispatch(reset())
}

}
