import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators, } from '@angular/forms';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}