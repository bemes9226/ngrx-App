import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { change, decreament, increament, reset } from '../store/counterAction';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;
constructor(private _store:Store<{counter:{counter:number}}>){ }

  ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
}

onVal(value: any){
console.log(value)
this._store.dispatch(change())
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
