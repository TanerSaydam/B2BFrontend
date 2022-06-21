import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminRoleModel } from '../models/admin-role-model';

@Injectable({
  providedIn: 'root'
})
export class AdminDecodeService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  roles: AdminRoleModel[] = [];

  constructor() { }

  getUserId(): number{
    let decode = this.jwtHelper.decodeToken(localStorage.getItem("adminToken"));
    var userId = Object.keys(decode).filter(p=> p.endsWith("/nameidentifier"))[0];
    return +decode[userId];
  }

  getUserName(): string{
    let decode = this.jwtHelper.decodeToken(localStorage.getItem("adminToken"));
    var userName = Object.keys(decode).filter(p=> p.endsWith("/name"))[0];
    return decode[userName];
  }

  getUserRoles(){
    this.roles = [];

    let decode = this.jwtHelper.decodeToken(localStorage.getItem("adminToken"));
    var userRoles = Object.keys(decode).filter(p=> p.endsWith("/role"));
    userRoles.forEach(element => {
      let model: AdminRoleModel = new AdminRoleModel();
      model.role = decode[element]
      this.roles.push(model);
    });
    
    return this.roles;
  }

}
