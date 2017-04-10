'use strict';
var Mock = require('mockjs')
const template = require('../mock/dashboard');


module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = Mock.mock(template)
    }
  }
  return HomeController;
};

