import { Component, OnInit, Input} from '@angular/core';
import { AUTH_VIEWS } from '../home/home.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss', '../app.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() changeAuthView: Function;

  public AUTH_VIEWS = AUTH_VIEWS;

  public user: firebase.User = this.authService.getCurrentUser();

  public accountDetailUpdates = {
    // get display name from firebase
  	displayName: this.user.displayName 
  }

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  	console.log(this.user);
  }

  getCurrentUserEmail(): string {
  	console.log(this.user);
  	return this.user.email;
  }

  updateAccountDetailsClicked(accountDetailUpdates: any) {
  	this.authService.updateUser(accountDetailUpdates)
  	.then(response => {
      //Success
      console.log('update user successe!!');
      console.log(response);
    })
    .catch(error => {
      //Error
      console.log(error);
    })
  }

  getProfileInitials(): string {
    const splitName = this.user.displayName.split(/_| |-|\./);
    if (splitName.length >= 2) {
      return (splitName[0][0] + splitName[1][0]).toUpperCase();
    } else if (splitName.length === 1 && splitName[0].length >= 2) {
      return (splitName[0][0] + splitName[0][1]).toUpperCase();
    }
    return '??';
  }

}
