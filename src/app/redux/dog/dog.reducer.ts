import { createReducer, on } from "@ngrx/store";
import { DogState } from "./dog.state";
import { changeDogStatusSuccess, setDogSuccess } from "./dog.action";

const _dogReducer = createReducer(
    DogState,
    on(setDogSuccess, (state, { payload }) => {
        return {
            ...state,
            dogs: [...state.dogs, payload]
        }
    }),
    on(changeDogStatusSuccess, (state, { payload }) => {
        const dogs = state.dogs;
        console.log("dogs", dogs);
        return {
            ...state,
            dogs: [...state.dogs, payload]
        }
    })
)
export function dogReducer(state: any, action: any) {
    return _dogReducer(state, action);
}