import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;  
  invalidLogin = false;
  loginSuccess = false;

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password)
      .subscribe(
        (result) => {
          this.authenticationService.registerSuccessfulLogin(this.username, this.password);
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.router.navigate(['home']);
        },
        (data) => {
          this.errorMessage = (data.error['message']) ? data.error['message'] : 'Erro ao validar credencial';
          this.invalidLogin = true;
          this.loginSuccess = false;
        });
  }
}