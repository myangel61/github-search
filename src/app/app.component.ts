import { Component } from '@angular/core';
import {HttpLink} from "apollo-angular-link-http";
import {Apollo} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({
        uri: 'https://api.github.com/graphql',
        headers: new HttpHeaders().set('Autorization', 'bearer e8f6f403ba584840d58c40ce5e181519ab424221')
      }),
      cache: new InMemoryCache(),
    });
  }
}
