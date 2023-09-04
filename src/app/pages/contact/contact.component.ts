import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // email = new FormControl('', [Validators.required, Validators.email]);
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.maxLength(14)]],
    date: '',
    services: '',
    numberOfPeople:['', [Validators.required, Validators.maxLength(2)]],
    numberOfPeopleForHair: ['', [Validators.required, Validators.maxLength(2)]],
    time: ['', [Validators.required]],
    location: '',
    information: '',
    question: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }

}
