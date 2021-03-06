import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchStr: string = '';
  minLength: number = 3;
  isContain: boolean = false;
  user: any;

  constructor(private service: UserService) { }

  handleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.service.getUser(this.searchStr)
        .subscribe(user => {
          this.user = user;
          this.isContain = true;
        });
    }
  }
}
