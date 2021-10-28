import Breakpoints from './breakpoints.js';

export const AdvisorsSelectors = {
    CONTAINER: '.advisors',
    ITEM: 'advisor',
    PREVIOUS_BUTTON: '.advisors__button--previous',
    NEXT_BUTTON: '.advisors__button--next',
};

export const ADVISORS_SWIPER_CONFIG = {
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        [Breakpoints.SM]: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        [Breakpoints.LG]: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
    },
    navigation: {
        prevEl: AdvisorsSelectors.PREVIOUS_BUTTON,
        nextEl: AdvisorsSelectors.NEXT_BUTTON,
    },
    spaceBetween: 20,
    slideClass: AdvisorsSelectors.ITEM,
    observer: true,
    observeParents: true,
};
