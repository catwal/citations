import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  /* c'est dans library qu'on va afficher les données du quote donc il faut les definir */
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage = QuotesPage;

  /* ngonInit sert quand on gère des données */
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
