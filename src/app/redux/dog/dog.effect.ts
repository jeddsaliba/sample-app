import { Injectable } from "@angular/core";
import { Dog } from "./dog.model";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DogType } from "./dog.type";
import { map, tap } from "rxjs";
import { changeDogStatusSuccess, setDogSuccess } from "./dog.action";

@Injectable()
export class DogEffect {
    constructor(
        private store: Store<Dog>,
        private action: Actions
    ) {}

    _setDog = createEffect(() => {
        return this.action.pipe(
            ofType(DogType.DOG),
            map(({payload}) => {
                console.log(payload);
                return setDogSuccess(payload)
            })
        )
    })

    _changeDogStatus = createEffect(() => {
        return this.action.pipe(
            ofType(DogType.DOG_STATUS),
            map(({payload}) => {
                console.log(payload);
                return changeDogStatusSuccess(payload)
            })
        )
    })
}