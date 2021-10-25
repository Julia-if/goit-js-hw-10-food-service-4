import './sass/main.scss';
import refs from './references/refs'
import cards from './data/menu.json';
import cardsTpl from './templates/card.hbs'
import { onInputChange, setSavedTheme } from './js/functions'

const cardsMarkup = cardsTpl(cards);

setSavedTheme()

refs.themeSwitchBtn.addEventListener('change', onInputChange);

refs.menu.innerHTML = cardsMarkup;





