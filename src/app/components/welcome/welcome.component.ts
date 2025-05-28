import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent{
  // Reactive form group for username input
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedService: SharedService
  ) {
    // Initialize the form with a required username control
    this.form = this.fb.group({
      username: ['', Validators.required],
    });
  }

  // Handles form submission
  onSubmit(): void {
    if (this.form.valid) {
      const username = this.form.value.username; // Get username value
      this.sharedService.setUsername(username); // Save username for app-wide use
      this.router.navigate(['/search']); // Navigate to search page after successful login
    } else {
      this.form.markAllAsTouched(); // Mark controls as touched to trigger validation messages
    }
  }
}
