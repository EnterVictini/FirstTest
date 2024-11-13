import { $ } from '@wdio/globals'
import Page from './page.js';

class homePage {
    get hamburgerMenu () {
        return $('input[id="user-name"]');
    }

    get allItems () {
        return $('input[id="password"]');
    }

    get about () {
        return $('input[id="login-button"]');
    } 
   
    get logOut () {
        return $('input[id="login-button"]');
    } 
   
    get ResetAppState () {
        return $('input[id="login-button"]');
    } 
}