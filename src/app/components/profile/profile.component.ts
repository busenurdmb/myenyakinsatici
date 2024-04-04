import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private userservice: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo() {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token'); // token'ı nereden aldığınıza bağlı olarak bu kısmı ayarlayın
      const userEmail = this.userservice.getUserEmailFromToken(token);
      if (userEmail) {
        console.log(userEmail);
        this.userservice.getByMail(userEmail).subscribe(
          (user: User) => {
            this.user = user;
            console.log(user);
          },

          (error) => {
            this.toastrService.error('Kullanıcı bilgileri alınamadı.');
          }
        );
      } else {
        this.toastrService.error('Kullanıcı email bilgisi bulunamadı.');
      }
    }
  }
  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
