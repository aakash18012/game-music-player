import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase/app';
import 'firebase/database';


export const firebaseConfig = {
	apiKey: 'AIzaSyD-qlduY4Mu89iXzch-OosGjf0dPb5zFLI',
	authDomain: 'game-music-player.firebaseapp.com',
	databaseURL: 'https://game-music-player.firebaseio.com',
	storageBucket: 'game-music-player.appspot.com',
	messagingSenderId: '26986259894'
};

@Component({
	templateUrl: 'app.html'
})
export class AppComponent {
	rootPage: any = HomePage;

	constructor(platform: Platform) {
		firebase.initializeApp(firebaseConfig);
	}
}
