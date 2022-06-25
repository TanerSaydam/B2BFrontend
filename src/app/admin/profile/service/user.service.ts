import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient: HttpClient,
  ) { }

  update(user: UserModel){
    let api = this.apiUrl + "Users/UpdateUserByAdminPanel";
    return this.httpClient.post(api, user);
    }
}
