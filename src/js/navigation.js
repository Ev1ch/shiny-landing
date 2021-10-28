export const NavigationSelectors = {
    CONTAINER: '.navigation',
    LIST: '.navigation__list',
    TOGGLE: '.navigation__toggle',
    BURGER: 'navigation--burger',
};

export const NavigationEls = {
    LIST: document.querySelector(NavigationSelectors.LIST),
    TOGGLE: document.querySelector(NavigationSelectors.TOGGLE),
    CONTAINER: document.querySelector(NavigationSelectors.CONTAINER),
};
