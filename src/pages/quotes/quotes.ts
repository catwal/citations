import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  /* ici on ne met pas le tableau car c'est un element seul que l'on veut */
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(
    private navParams: NavParams,
    /* pour rajouter une alerte il faut injecter alertCtrl */
    private alertCtrl: AlertController,
    /* injection du QuoteService */
    private quotesService: QuotesService
  ) {

  }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  /* création de l'alerte avec quote en paramètre et préparation du texte */
  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you really sure?',
      /* c'est un tableau de bouton buttons: ['OK'] */
      buttons: [
        /* insertion d'un objet javascript */
        {
        text: 'Yes, go ahead',
        handler: () => {
          this.quotesService.addQuoteToFavorites(selectedQuote);
          console.log('OK');
        }
      },
        {
        text: 'No, I changed my mind!',
        /* le role cancelled permet une execution cancel
        mais aussi si utilisateur appuie autre part, considère comme annulation */
        role:'cancel',
        handler: () => {
          console.log('Cancelled!');
        }
      }
  ]
 });
  /* affichage de l'alerte */
  alert.present();

}
onRemoveFromFavorites(quote: Quote){
this.quotesService.removeQuoteFromFavorites(quote);
}
/* méthode qui dit si oui ou non un quote est en favorie
il fera appel a un service */
isItFavorite(quote: Quote){
return this.quotesService.isItQuoteFavorite(quote);
}
  /* data  est générique à angular */
  //ionViewDidLoad(){
  //  this.quoteGroup = this.navParams.data;
 // Si j'utilise ça il faut mettre ? entre quoteGroupe et .category
  //}

}
