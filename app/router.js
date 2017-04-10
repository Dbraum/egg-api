'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/api/login', 'login.login');
  app.post('/api/logout', 'login.logout');
  app.get('/api/dashboard', 'dashboard.index');
  app.get('/api/users', 'users.index');
};
