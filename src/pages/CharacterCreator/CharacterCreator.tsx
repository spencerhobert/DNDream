import { Outlet, useLocation, useNavigate } from 'react-router';
import PageArrow from './components/PageArrow';
import { CHARACTER_CREATOR_PAGES } from './assets/Constants';

export default function CharacterCreator() {
    const location = useLocation();
    console.log(`Path name: ${location.pathname}`);
    const navigate = useNavigate();

    // Find current page index
    const currentPage = CHARACTER_CREATOR_PAGES.find(
        (page) => location.pathname === page.absoluteRoute
    );
    console.log(`Current page: ${currentPage}`);
    const isLeftPageTurnDisabled: boolean =
        typeof currentPage?.prevPageRoute === 'undefined';
    const isRightPageTurnDisabled: boolean =
        typeof currentPage?.nextPageRoute === 'undefined';

    const switchPages = (direction: 'left' | 'right') => {
        if (currentPage?.prevPageRoute && direction === 'left') {
            // Back
            navigate(currentPage.prevPageRoute);
        } else if (currentPage?.nextPageRoute) {
            // Foreward
            navigate(currentPage.nextPageRoute);
        }
    };

    return (
        <div className="character-creator text-center">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <div className="flex flex-row pt-5">
                <div className="relative basis-1/6 items-start sm:basis-1/12 sm:items-center">
                    <div className="sticky top-1/2 left-0 -translate-y-1/2">
                        <PageArrow
                            direction="left"
                            disabled={isLeftPageTurnDisabled}
                            onClick={switchPages}
                        />
                    </div>
                </div>
                <div className="grow">
                    <Outlet />
                </div>
                <div className="relative basis-1/6 sm:basis-1/12 sm:items-center">
                    <div className="sticky top-1/2 right-0 -translate-y-1/2">
                        <PageArrow
                            direction="right"
                            disabled={isRightPageTurnDisabled}
                            onClick={switchPages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
