import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
import { TeamSelectors, TEAM_SWIPER_CONFIG } from './team-swiper.js';
import {
    PartnersSelectors,
    PARTNERS_SWIPER_CONFIG,
} from './partners-swiper.js';
import {
    AdvisorsSelectors,
    ADVISORS_SWIPER_CONFIG,
} from './advisors-swiper.js';
import { NavigationSelectors, NavigationEls } from './navigation.js';

const partnersSwiper = new Swiper(
    PartnersSelectors.CONTAINER,
    PARTNERS_SWIPER_CONFIG,
);

const teamSwiper = new Swiper(TeamSelectors.CONTAINER, TEAM_SWIPER_CONFIG);

const advisorsSwiper = new Swiper(
    AdvisorsSelectors.CONTAINER,
    ADVISORS_SWIPER_CONFIG,
);

NavigationEls.TOGGLE.addEventListener('click', () =>
    NavigationEls.CONTAINER.classList.toggle(NavigationSelectors.BURGER),
);
