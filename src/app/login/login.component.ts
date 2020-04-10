import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputText2: string = "Daayana";
  inputText3: string = "Dark";
  inputText4: string = "Daayana";
  inputText5: string = "Dark";
  constructor() { }

  ngOnInit(): void {
  }

}
