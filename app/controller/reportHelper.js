'use strict';


var data = require('../mock/reportHelper')


module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = {
        success: true,
        data: data.list
      }
    }
    * info() {
      const id = `id_${this.ctx.params.id}`
      this.ctx.body = {
        name: data[id],
      };
    }
  }
  return HomeController;
};

