import { useState, useEffect, useCallback } from 'react';
import { initialWeddingData } from '@/initData/initialWedData';
import { fetchWeddingData } from '@/utils/dataLoader';

export function UseWedDaTaLoad(nParam, fParam, eParam) {
    const [isLoading, setIsLoading] = useState(true);
    const [paramN, setParamN] = useState(null);
    const [isF, setIsF] = useState(null);
    const [isE, setIsE] = useState(null);
    const [err, setErr] = useState(null);
    const [weddingData, setWeddingData] = useState(initialWeddingData);

    const loadData = useCallback(async () => {
        setParamN(nParam);
        setIsF(fParam);
        setIsE(eParam);

        const response = await fetchWeddingData(
            nParam,
            fParam,
            eParam,
            setWeddingData,
            setErr,
            setIsLoading
        );

        if (response) {
            setWeddingData(prev => ({
                ...prev,
                newlyWed1: response.wedding?.wm1 || prev.newlyWed1,
                newlyWed2: response.wedding?.wm2 || prev.newlyWed2,
                intro: response.wedding?.intro || prev.intro,
                invite: response.wedding?.invite || prev.invite,
                date: response.wedding?.date ? new Date(response.wedding.date) : prev.date,
                eventList: response.events || prev.eventList,
                wishList: response.wishes || prev.wishList,
                guestData: {
                    guestYes: response.guests?.guestYes || prev.guestData.guestYes,
                    guestNot: response.guests?.guestNot || prev.guestData.guestNot
                }
            }));
        }
    }, [nParam, fParam, eParam]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return {
        isLoading,
        paramN,
        isF,
        isE,
        err,
        weddingData,
        setWeddingData,
        setErr,
        setIsLoading
    };
}