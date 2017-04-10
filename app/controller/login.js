'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * login() {
      const {username, password} = this.ctx.request.body
      let payload

      if (username === "guest" && password === "guest") {
        payload = {
          logined: true,
          username
        }
      } else {
        payload = {
          logined: false,
          message: '用户名或者密码错误'
        }
      }

      this.ctx.body = payload
    }

    * logout() {
      this.ctx.body = {
        logout: true,
        message: '退出成功'
      }
    }
  }
  return HomeController;
};
