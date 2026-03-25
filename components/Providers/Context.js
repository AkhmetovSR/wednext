import {createContext, useContext, useState} from 'react';

export const UrlParamsContext = createContext({
    nParam: null,
    FParam: null,
    EParam: null,
});

export const WeddingDataContext = createContext();
export const useWeddingData = () => useContext(WeddingDataContext);

export const useControl = () => useContext(ControlContext);
export const ControlContext = createContext();

export const useOperations = () => useContext(OperationsContext);
export const OperationsContext = createContext();

export const CarouselStateContext = createContext();
export const CarouselStateProvider = ({ children }) => {
    const [reorderingStates, setReorderingStates] = useState({
        event: false,
        wish: false
    });
    const [selectedSlideId, setSelectedSlideId] = useState(null);
    const [isSlideOpen, setIsSlideOpen] = useState(false);
    const [buy, setBuy] = useState(false);
    const [bb, setBb] = useState(false);
    const [isAddEvent, setIsAddEvent] = useState(false);
    const [isAddEditE, setIsAddEditE] = useState(false);
    const [isAddWish, setIsAddWish] = useState(false);
    const [isAddEditW, setIsAddEditW] = useState(false);
    const [isEditIntro, setIsEditIntro] = useState(false);
    const [isEditInvite, setIsEditInvite] = useState(false);
    const [isEditWifeMan, setIsEditWifeMan] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [itemList, setItemList] = useState(null);
    const [elemState, setElemState] = useState("");
    const [activeSlide, setActiveSlide] = useState(3);
    const [autoSlide, setAutoSlide] = useState(true);
    const [showAttention, setShowAttention] = useState(true);

    const value = {
        reorderingStates,
        setReorderingStates,
        selectedSlideId,
        setSelectedSlideId, // устанавливаем в контекст в SlidePage (useEffect) -
        isSlideOpen,
        setIsSlideOpen,
        buy,
        setBuy,
        bb,
        setBb,
        isAddEvent,
        setIsAddEvent,
        isAddEditE,
        setIsAddEditE,
        isAddWish,
        setIsAddWish,
        isAddEditW,
        setIsAddEditW,
        isEditIntro,
        setIsEditIntro,
        isEditInvite,
        setIsEditInvite,
        isEditWifeMan,
        setIsEditWifeMan,
        isCalendarOpen,
        setIsCalendarOpen,
        itemList,
        setItemList,
        elemState,
        setElemState,
        activeSlide,
        setActiveSlide,
        autoSlide,
        setAutoSlide,
        showAttention,
        setShowAttention
    };
    return (
        <CarouselStateContext.Provider value={value}>
            {children}
        </CarouselStateContext.Provider>
    );
};
export const useCarouselState = () => useContext(CarouselStateContext);

// Куки и политика конфедициальности
export const PolicyStateContext = createContext();
export const PolicyStateProvider = ({ children }) => {
    // const [policyState, setPolicyState] = useState({
    //     cookieYes: true,
    //     cookieNo: false
    // });
    //
    // const value = {
    //     ...policyState,
    //     setCookieYes: (value) => setPolicyState(prev => ({ ...prev, cookieYes: value })),
    //     setCookieNo: (value) => setPolicyState(prev => ({ ...prev, cookieNo: value }))
    // };
    const [cookieAccepted, setCookieAccepted] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const value = {
        cookieAccepted,
        setCookieAccepted,
        policyAccepted,
        setPolicyAccepted,
        showCookieBanner,
        setShowCookieBanner
    };

    return (
        <PolicyStateContext.Provider value={value}>
            {children}
        </PolicyStateContext.Provider>
    );
};
export const usePolicyState = () => useContext(PolicyStateContext);

//Ошибки
export const ErrorContext = createContext();
export const ErrorProvider = ({ children }) => {
    // Состояния ошибок при валидации wm1 и mw2
    const [name1Error, setName1Error] = useState(false);
    const [name2Error, setName2Error] = useState(false);
    const [emptyError, setEmptyError] = useState(false);

    const value = {
        name1Error,
        setName1Error,
        name2Error,
        setName2Error,
        emptyError,
        setEmptyError
    }
    return (
        <ErrorContext.Provider value={value}>
            {children}
        </ErrorContext.Provider>
    );
};
export const useErrorState = () => useContext(ErrorContext);

//Координаты для анимации слоев (параллакс)
export const PositionContext = createContext();
export const PositionProvider = ({ children }) => {
    const [scl, setScl] = useState(1);
    const [y1, setY1] = useState(0);
    const [y2, setY2] = useState(0);
    const [y3, setY3] = useState(0);
    const [y4, setY4] = useState(0);
    const [sclHome, setSclHome] = useState(1);
    const [opacityH, setOpacityH] = useState(1);

    const value = {
        scl,
        setScl,
        y1,
        setY1,
        y2,
        setY2,
        y3,
        setY3,
        y4,
        setY4,
        sclHome,
        setSclHome,
        opacityH,
        setOpacityH
    }
    return (
        <PositionContext.Provider value={value}>
            {children}
        </PositionContext.Provider>
    );
};
export const usePositionState = () => useContext(PositionContext);

//Смена страниц в самих шаблонах
const PageContext = createContext();
export const PageProvider = ({ children, initialPage = 'home', pages = [] }) => {
    const [activePage, setActivePage] = useState(initialPage);

    const changePage = (newPage) => {
        if (pages.includes(newPage)) {
            setActivePage(newPage);
        } else {
            console.error(`Page ${newPage} is not allowed!`);
        }
    };

    return (
        <PageContext.Provider value={{ activePage, changePage }}>
            {children}
        </PageContext.Provider>
    );
};
export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageProvider');
    }
    return context;
};

//Смена слайдов в шаблоне
export const PageToSlideIndexContext = createContext({
    home: 0,
    event: 1,
    wish: 2,
    rsvp: 3,
    analytics: 4
});
export const PageToSlideIndexProvider = ({ children }) => {
    const pageToSlideIndex = {
        home: 0,
        event: 1,
        wish: 2,
        rsvp: 3,
        analytics: 4
    };

    return (
        <PageToSlideIndexContext.Provider value={pageToSlideIndex}>
            {children}
        </PageToSlideIndexContext.Provider>
    );
};