import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';



@Component({
   selector: 'page-tabs',
   template:  `
    <ion-tabs>
    /* selectedIndex="1" sachant que ça démarre de 0 pour que la première page chargée soit library */
    <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
   `
})

export class TabsPage{
favoritesPage = FavoritesPage;
libraryPage = LibraryPage;
}