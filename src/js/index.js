import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const Breakpoints = {
    MD: 768,
    LG: 1200,
};

const PartnersSelectors = {
    CONTAINER: '.partners',
    ITEM: 'partner',
    PREVIOUS_BUTTON: '.partners__button--previous',
    NEXT_BUTTON: '.partners__button--next',
};

const PARTNERS_SWIPER_CONFIG = {
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        [Breakpoints.MD]: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        [Breakpoints.LG]: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
    },
    navigation: {
        prevEl: PartnersSelectors.PREVIOUS_BUTTON,
        nextEl: PartnersSelectors.NEXT_BUTTON,
    },
    spaceBetween: 20,
    slideClass: PartnersSelectors.ITEM,
    observer: true,
    observeParents: true,
};

const partnersSwiper = new Swiper(
    PartnersSelectors.CONTAINER,
    PARTNERS_SWIPER_CONFIG,
);
