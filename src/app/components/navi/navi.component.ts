import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css',
})
export class NaviComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private userservice: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}
}
