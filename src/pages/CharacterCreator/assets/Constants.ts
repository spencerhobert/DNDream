// Page Routing

const BASE_ROUTE = '/character-creator';

type PageType = {
    name: string;
    route: string;
    absoluteRoute?: string;
    prevPageRoute?: string;
    nextPageRoute?: string;
};

const PAGES: PageType[] = [
    { name: 'Race', route: '.', absoluteRoute: BASE_ROUTE },
    { name: 'Class', route: 'class' },
    { name: 'Background', route: 'background' },
];

export const CHARACTER_CREATOR_PAGES: PageType[] = PAGES.map((page, index) => {
    const result = { ...page };
    
    if (index > 0) {
        result.prevPageRoute = PAGES[index - 1].route;
        result.absoluteRoute = BASE_ROUTE + '/' + result.route;
    }

    if (index < PAGES.length - 1) {
        result.nextPageRoute = PAGES[index + 1].route;
    }

    console.log(result);
    return result;
});
