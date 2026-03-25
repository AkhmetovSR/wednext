'use client';

import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
    WeddingDataContext,
    ControlContext,
    OperationsContext,
    CarouselStateProvider,
    PolicyStateProvider,
    UrlParamsContext,
    ErrorProvider,
    PositionProvider,
    PageProvider,
    PageToSlideIndexProvider
} from './Context';
import { UseWedDaTaLoad } from '@/hooks/useWedDaTaLoad';
import { UseCheckLoad } from '@/hooks/useCheckLoad';

export default function Providers({ children }) {
    const [urlParams, setUrlParams] = useState({n: null, f: null, e: null});
    useEffect(() => {
        const url = new URL(window.location.href);
        setUrlParams({
            n: url.searchParams.get("n"),
            f: url.searchParams.get("f"),
            e: url.searchParams.get("e")
        });
    }, []);
    const {isLoading, paramN, isF, isE, err, weddingData, setWeddingData, setErr, setIsLoading} = UseWedDaTaLoad(urlParams.n, urlParams.f, urlParams.e);
    const allResourcesLoaded = UseCheckLoad(isLoading, err, weddingData);
    const isContentReady = !isLoading && allResourcesLoaded && !err;
    const weddingDataValue = useMemo(() => ({
        weddingData,
        setWeddingData,
        setNewlyWed1: (name) => setWeddingData(prev => ({...prev, newlyWed1: name})),
        setNewlyWed2: (name) => setWeddingData(prev => ({...prev, newlyWed2: name})),
        setIntro: (intro) => setWeddingData(prev => ({...prev, intro: intro})),
        setInvite: (invite) => setWeddingData(prev => ({...prev, invite: invite})),
        setDate: (date) => setWeddingData(prev => ({...prev, date: date})),
        setEventList: (eventList) => setWeddingData(prev => ({...prev, eventList: eventList})),
        addEvent: (event) => setWeddingData(prev => ({
            ...prev,
            eventList: [...(prev.eventList || []), {id: Date.now(), ...event}]
        })),
        updateEvent: (id, updatedEvent) => setWeddingData(prev => ({
            ...prev,
            eventList: prev.eventList.map(event =>
                event.id === id ? {...event, ...updatedEvent} : event
            )
        })),
        setWishList: (wishList) => setWeddingData(prev => ({...prev, wishList: wishList})),
        addWish: (wish) => setWeddingData(prev => ({
            ...prev,
            wishList: [...(prev.wishList || []), {id: Date.now(), ...wish}]
        })),
        updateWish: (id, updatedWish) => setWeddingData(prev => ({
            ...prev,
            wishList: prev.wishList.map(wish =>
                wish.id === id ? {...wish, ...updatedWish} : wish
            )
        })),
        setMail: (mail) => setWeddingData(prev => ({...prev, mail: mail})),
    }), [weddingData, setWeddingData]);
    const controlValue = useMemo(() => ({
        paramN,
        isE,
        isF,
        isLoading: !isContentReady,
        err
    }), [paramN, isE, isF, isContentReady, err]);
    const handleSave = useCallback(async () => {
        setIsLoading(true);
        setErr(null);
        const dataToSave = prepareSaveData(weddingDataValue.weddingData, paramN);
        await handleSaveOperation(dataToSave, paramN, setErr);
        setIsLoading(false);
    }, [weddingDataValue, paramN, setIsLoading, setErr]);
    const handleRetry = useCallback(() => {
        paramN ? window.location.reload() : handleSave();
    }, [paramN, handleSave]);
    const operationsValue = useMemo(() => ({
        setIsLoading,
        setErr,
        handleSave,
        handleRetry
    }), [handleSave, handleRetry, setIsLoading, setErr]);
    const urlParamsValue = useMemo(() => ({
        nParam: urlParams.n,
        fParam: urlParams.f,
        eParam: urlParams.e
    }), [urlParams.n, urlParams.f, urlParams.e]);

    return (
        <UrlParamsContext.Provider value={urlParamsValue}>
            <WeddingDataContext.Provider value={weddingDataValue}>
                <ControlContext.Provider value={controlValue}>
                    <OperationsContext.Provider value={{ setIsLoading, setErr }}>
                        <ErrorProvider>
                            <CarouselStateProvider>
                                <PolicyStateProvider>
                                    <PositionProvider>
                                        <PageProvider initialPage="home" pages={['home', 'wish', 'event', 'rsvp', 'analytics']}>
                                            <PageToSlideIndexProvider>
                                                {children}
                                            </PageToSlideIndexProvider>
                                        </PageProvider>
                                    </PositionProvider>
                                </PolicyStateProvider>
                            </CarouselStateProvider>
                        </ErrorProvider>
                    </OperationsContext.Provider>
                </ControlContext.Provider>
            </WeddingDataContext.Provider>
        </UrlParamsContext.Provider>
    );
}