import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Dog } from "./dog.model";

const dogState = createFeatureSelector<Dog>('dogs');
export const selectDogs = createSelector(dogState, (state: Dog) => state.dogs);