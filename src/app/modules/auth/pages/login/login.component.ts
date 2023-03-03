import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material.module';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    MaterialModule
  ]
})
export class LoginComponent {

}
