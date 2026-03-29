'use client';
import s from '@/components/Main/Home/Home.module.css';
import Carousel from "@/components/CarouselSwipe/Carousel";
import React from "react";

export default function HomePage() {
    return (
        <div className={s.Main}>
            <Carousel/>
        </div>
    );
}



{/*                    /!* Основной контент *!/*/}
{/*                    <div style={{*/}
{/*                      opacity: isContentReady ? 1 : 0,*/}
{/*                      transition: 'opacity 0.5s ease-in-out',*/}
{/*                      pointerEvents: isContentReady ? 'auto' : 'none'*/}
{/*                    }}>*/}

{/*<Home/>*/}
{/*                    </div>*/}

{/*                    /!* LoadError *!/*/}
{/*                    <AnimatePresence>*/}
{/*                      {!isContentReady && (*/}
{/*                          <LoadError*/}
{/*                              key="load-error"*/}
{/*                              initial={{ opacity: 1 }}*/}
{/*                              exit={{ opacity: 0 }}*/}
{/*                              transition={{ duration: 0.5 }}*/}
{/*                          />*/}
{/*                      )}*/}
{/*                    </AnimatePresence>*/}