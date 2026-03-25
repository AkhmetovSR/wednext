import Temp3 from "@/components/Main/Home/Templates/Temp/T3/Temp3";

const UnderDevelopment = ({ slideNumber }) => (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '25px',
        position: 'relative',
        overflow: 'hidden'
    }}>
        {/* Декоративный элемент */}
        <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite'
        }} />

        {/* Иконка разработки */}
        <div style={{
            fontSize: '64px',
            marginBottom: '20px',
            filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))'
        }}>
            🚧
        </div>

        {/* Основной текст */}
        <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
            Шаблон в разработке
        </div>

        {/* Номер слайда */}
        <div style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '20px'
        }}>
            Слайд {slideNumber}
        </div>

        {/* Анимация "скоро" */}
        <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '10px'
        }}>
            {['С', 'к', 'о', 'р', 'о'].map((letter, i) => (
                <span key={i} style={{
                    color: 'rgba(99, 102, 241, 0.8)',
                    fontSize: '12px',
                    fontWeight: '500',
                    animation: `bounce 0.5s ease-in-out ${i * 0.1}s infinite`
                }}>
                    {letter}
                </span>
            ))}
        </div>

        {/* Стили анимаций */}
        <style jsx>{`
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.1); opacity: 0.8; }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
        `}</style>
    </div>
);

export const tempArr = [
    { id: 1, div: <UnderDevelopment slideNumber={1} /> },
    { id: 2, div: <UnderDevelopment slideNumber={2} /> },
    { id: 3, div: <Temp3 /> },
    { id: 4, div: <UnderDevelopment slideNumber={4} /> },
    { id: 5, div: <UnderDevelopment slideNumber={5} /> },
    { id: 6, div: <UnderDevelopment slideNumber={6} /> },
    { id: 7, div: <UnderDevelopment slideNumber={7} /> },
    { id: 8, div: <UnderDevelopment slideNumber={8} /> },
    { id: 9, div: <UnderDevelopment slideNumber={9} /> },
    { id: 10, div: <UnderDevelopment slideNumber={10} /> },
    { id: 11, div: <UnderDevelopment slideNumber={11} /> }
];