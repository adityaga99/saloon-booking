import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mode1: any = {};


  constructor(private _authenticationService: AuthenticationService, private _toastrService: ToastrService, private _router: Router) { }

  ngOnInit() {
  }

  admin(){
    this._toastrService.success("Successfully logged in!");
    this._router.navigate(['/admin']);
    this._authenticationService.admin(this.mode1.emailAddress, this.mode1.password);

  }

}
