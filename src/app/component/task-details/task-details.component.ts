import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
 taskForm: FormGroup;

 constructor(private formBuilder: FormBuilder) {
  this.taskForm = this.formBuilder.group({
    title: ['',[Validators.required]],
    description: ['',[Validators.required]],
    status: ['',[Validators.required]]
  });
 }

 updateTask() {
  alert('');
 }
}
