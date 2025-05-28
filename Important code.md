-------- This  is for chek invalid form control ------------
 Object.keys(this.userForm.controls).forEach(controlName => {
    const control = this.userForm.get(controlName);
    if (control && control.invalid) {
      console.log(`❌ Control: ${controlName}, Errors:`, control.errors);
      // Optionally mark as touched to trigger validation UI
      control.markAsTouched();
    }
  });
