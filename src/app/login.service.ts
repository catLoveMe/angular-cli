import { Injectable } from '@angular/core';
import { HttpUtilService } from './httpUtil.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(
  public httpUtilService:HttpUtilService
) { }
 /** 
   * 登陆功能 
   * @param params 
   * @returns {Promise<{}>} 
   */  
  login(username: string, password: string) {  
    return this.httpUtilService.request({  
      method: 'POST',  
      url: 'http://localhost:8080/ailschn_community/login/userLogin', // 登录URL  
      data: {  
        userNickname: username,  
        userPassword: password  
      },  
    });  
  }  
}
