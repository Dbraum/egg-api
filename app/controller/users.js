'use strict';
var Mock = require('mockjs')
const template = require('../mock/users');


var usersListData = Mock.mock(template)

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.info(this.ctx.query)
      const page = this.ctx.query || {}

      const pageSize = page.pageSize || 20
      const currentPage = page.page || 1

      let data
      let newPage

      let newData = usersListData.data.concat()

      if (page.field) {
        const d = newData.filter(function(item) {
          return item[page.field].indexOf(decodeURI(page.keyword)) > -1
        })

        data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize)

        newPage = {
          current: currentPage * 1,
          total: d.length
        }
      } else {
        data = usersListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        usersListData.page.current = currentPage * 1
        newPage = {
          current: usersListData.page.current,
          total: usersListData.page.total
        }
      }


      this.ctx.body = {
        success: true,
        data,
        page: newPage
      }
    }
  }
  return HomeController;
};

