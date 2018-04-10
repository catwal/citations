import { Quote } from "../data/quote.interface";
/* penser à mettre service dans le providers dans app.module */

export class QuotesService {
    /* on veut mettre les infos des quotes favories dans un tableau */
    private favoriteQuotes: Quote[] = [];





    /* instanciation des méthodes relatives à toutes les actions 
    pour faire des favories */


    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        /* suppression par l'id */
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        /* donne la constante et le nbre a supprimer */
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }
    isItQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteElt: Quote) => {
            return quoteElt.id == quote.id;
        });
    }
} 