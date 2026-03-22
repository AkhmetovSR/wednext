// components/Carousel/Carousel.jsx
import Link from 'next/link';

export default function Carousel() {
    const router = useRouter();
    const { paramN, isE } = useControl();
    const { selectedSlideId, bb} = useCarouselState();
    const { closeForm } = useAddEditForm();

    useEffect(() => {
        // Предзагрузка всех слайдов
        for (let i = 1; i <= tempArr.length; i++) {
            router.prefetch(`/${i}`);
        }
    }, [router]);

    return (
        <Swipe>
            {tempArr.map((i) => (
                <Link href={`/${i.id}`} prefetch={false} key={i.id}>  {/* prefetch=false, т.к. уже предзагрузили */}
                    <motion.div 
                        data-id={i.id} 
                        className={s.Carousel} 
                        style={{ borderRadius: selectedSlideId ? 0 : 25 }} 
                        transition={{ duration: 0.3, delay: 0 }}
                    >
                        {i.div}
                        {selectedSlideId && bb && (!paramN || isE) && (
                            <motion.div className={s.BB}>
                                <motion.div className={s.divClose} onTap={closeForm}></motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                </Link>
            ))}
        </Swipe>
    );
}