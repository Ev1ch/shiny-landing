import Breakpoints from './breakpoints.js';

export const TeamSelectors = {
    CONTAINER: '.team',
    ITEM: 'team-member',
    PREVIOUS_BUTTON: '.team__button--previous',
    NEXT_BUTTON: '.team__button--next',
};

export const TEAM_SWIPER_CONFIG = {
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
        prevEl: TeamSelectors.PREVIOUS_BUTTON,
        nextEl: TeamSelectors.NEXT_BUTTON,
    },
    spaceBetween: 20,
    slideClass: TeamSelectors.ITEM,
    observer: true,
    observeParents: true,
};
