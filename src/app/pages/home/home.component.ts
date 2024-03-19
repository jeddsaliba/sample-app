import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { changeDogStatus, setDog } from 'src/app/redux/dog/dog.action';
import { selectDogs } from 'src/app/redux/dog/dog.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup | any;
  dogs$: Observable<any> = of([]);
  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    
  }
  ngOnInit(): void {
    this.initForm();
    this.onHandleLoadDogs();
  }
  initForm() {
    this.form = this.formBuilder.group({
      dog_name: ['', Validators.required]
    })
  }
  onHandleSubmit(): void {
    const newDog = {
      name: this.form.controls.dog_name.value,
      status: 'listed'
    };
    this.store.dispatch(setDog(newDog));
  }
  onHandleLoadDogs(): void {
    this.dogs$ = this.store.select(selectDogs);
  }
  onChangeToExamining(dog: {name: string, status: string}): void {
    const newDog = {
      name: dog.name,
      status: 'examining'
    };
    this.store.dispatch(changeDogStatus(newDog));
  }
  onChangeToHooman(dog: {name: string, status: string}): void {
    const newDog = {
      name: dog.name,
      status: 'finally_back_to_hooman'
    };
    this.store.dispatch(changeDogStatus(newDog));
  }
}
