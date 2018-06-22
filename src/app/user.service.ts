import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(userName: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${userName}`)
      .pipe(map((res: any) => {
        console.log('res', res);
        return res;
      }));
  }
}
