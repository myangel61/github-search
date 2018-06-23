import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './user.service';

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
