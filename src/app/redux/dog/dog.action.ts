import { createAction } from "@ngrx/store";
import { DogType } from "./dog.type";

export const setDog = createAction(DogType.DOG, (payload: any) => ({ payload }));
export const setDogSuccess = createAction(DogType.DOG_SUCCESS, (payload: any) => ({ payload }));

export const changeDogStatus = createAction(DogType.DOG_STATUS, (payload: any) => ({ payload }));
export const changeDogStatusSuccess = createAction(DogType.DOG_STATUS_SUCCESS, (payload: any) => ({ payload }));