import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  /* viewCtrl est different de navCtrl dans le sens ou il gère ce qui
  est activement montré */
  constructor(private viewCtrl: ViewController, private navParams: NavParams) { }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
 /* pour enlever le favorie, utilisation de viewCtrl et dismiss
 en mettant des arguments pour rajouter des actions */
  onClose(remove = false) {
    /* dismiss supprime la page, comme le modal est un overlay, on ne supprime pas 
    vraiment la donnée */
    this.viewCtrl.dismiss(remove);
  }

/* statut des vues avec des observables et des hooks
 willEnter = observable, va devenir actif
 didEnter = observable, est actif
 willLeave = observable, va devenir inactif
 didLeave = observable, est inactif
 willUnload = observable, a ete detruit
 onWillDismiss = fonction, va etre congédié
 onDidDismiss = fonction, a ete congédié
 */

}
