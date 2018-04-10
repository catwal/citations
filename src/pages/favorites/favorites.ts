import { Component } from '@angular/core';
import { IonicPage, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings.service';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  /* il n'y aura pas qu'un seul quote */
  quotes: Quote[];

  /* injection du quoteService pour communiquer */
  constructor(private quotesService: QuotesService, private modalCtrl: ModalController, private menuCtrl: MenuController, private settingsService: SettingsService) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    /* injection du modal pour injecter la page du quote en question */
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    /* ici on enlève le favorie de la liste */
    modal.onDidDismiss((remove: boolean) => {

      if (remove) { //== true
        this.quotesService.removeQuoteFromFavorites(quote);
        console.log(remove);
        /* affichage encore du favorie, pas d'éffacement automatique
         2 solutions*/
        //rafraichissement
        //this.quotes = this.quotesService.getFavoriteQuotes();
        //recalcul selon l'id
        const position = this.quotes.findIndex((quoteElement: Quote) => {
          return quoteElement.id == quote.id;
        });
        this.quotes.splice(position, 1);
      }
      /* propose réutilisation du code par
      this.onRemoveFromFavorties(quote) on réutilise le code qu'on a déjà reutiliser sans le répéter*/
    });
    /* attention avait mis modal.willLeave ça n'existe plus sur modal*/
    //modal.onWillDismiss(
    //(remove: boolean) => console.log(remove)
    //);
  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);

    /* affichage encore du favorie, pas d'éffacement automatique
     2 solutions*/
    //rafraichissement
    //this.quotes = this.quotesService.getFavoriteQuotes();
    //recalcul selon l'id
    const position = this.quotes.findIndex((quoteElement: Quote) => {
      return quoteElement.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
  /* ouverture du bouton au clic en java
    onOpenMenu(){
  this.menuCtrl.open();
    }*/
  /* besoin d'une méthode pour gerer le fond des quotes */
  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
  
/* méthode qui utilise service et scss */
  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
