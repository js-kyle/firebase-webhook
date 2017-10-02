import * as admin from 'firebase-admin';
import * as main from './main.js';

// Initialize the app with a service account, granting admin privileges
admin.initializeApp();

const webhookOpts = {
  endpoint: 'https://requestb.in/1fscuva1',
  headers:  {"Authkey" : "xyz"},
  data: ['name', 'email']
}

main.subscribe('users/', webhookOpts);