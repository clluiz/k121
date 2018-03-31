import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import './app';

import './base.css';

if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}