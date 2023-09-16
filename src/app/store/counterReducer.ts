import { Action, createReducer, on } from "@ngrx/store";
import { initialSrtate } from "./counterState";
import { decreament, increament, reset } from "./counterAction";


export const _myReducer = createReducer(initialSrtate,
    on(increament,(state)=>{
        return {
            ...state,
            counter:state.counter+1
        }
    }),
    on(decreament,(state)=>{
        return {
            ...state,
            counter:state.counter-1
        }
    }),
    on(reset,(state)=>{
        return {
            ...state,
            counter:0
        }
    }))

  