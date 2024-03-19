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
        let result = state.dogs.filter((dog: any) => dog.name !== payload.name);
        return {
            ...state,
            dogs: [...result, payload]
        }
    })
)
export function dogReducer(state: any, action: any) {
    return _dogReducer(state, action);
}