import { Component } from '@angular/core';
import {HttpLink} from 'apollo-angular-link-http';
import {Apollo} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: 'https://api.github.com/graphql',
        headers: new HttpHeaders().set('Authorization', 'bearer 9dca2cfc258aaf12af4fcd8c6cda451b100a4d2c')
      }),
      cache: new InMemoryCache(),
    });
  }
}
