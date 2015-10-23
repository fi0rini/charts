// main entry point for application
import Router from 'react-router'
import Point from './Point.js';
var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);
