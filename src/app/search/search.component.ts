import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {Apollo} from 'apollo-angular';
import {GET_SMTH} from './graphql';

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

  constructor(private service: UserService, apollo: Apollo) {
    apollo.query({query: GET_SMTH}).subscribe((user) => {
      console.log(user);
    });
  }

  // handleChange() {
  //   if (this.minLength <= this.searchStr.length) {
  //     this.service.getUser(this.searchStr)
  //       .subscribe(user => {
  //         this.user = user;
  //         this.isContain = true;
  //       });
  //   }
  // }
}

// this.user = user;
// this.isContain = true;
