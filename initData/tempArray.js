import Temp3 from "@/components/Main/Home/Templates/Temp/T3/Temp3";

// Цветовая палитра для разных слайдов
const colorPalette = {
    1: { primary: '#FF6B6B', secondary: '#EE5A5A', accent: '#FFE3E3' },    // коралловый
    2: { primary: '#4ECDC4', secondary: '#3DBEB5', accent: '#E0F7F5' },    // бирюзовый
    3: { primary: '#FFE66D', secondary: '#F5D742', accent: '#FFF5CC' },    // золотистый (Temp3)
    4: { primary: '#9B87F5', secondary: '#8A74E8', accent: '#EFEAFF' },    // лавандовый
    5: { primary: '#FF9F4A', secondary: '#F58D32', accent: '#FFF0E0' },    // оранжевый
    6: { primary: '#6C5CE7', secondary: '#5B4BCF', accent: '#E9E5FF' },    // фиолетовый
    7: { primary: '#00B894', secondary: '#00A37E', accent: '#D4F4EC' },    // изумрудный
    8: { primary: '#E84393', secondary: '#D42C7A', accent: '#FFE5F2' },    // розовый
    9: { primary: '#0984E3', secondary: '#0773C9', accent: '#E1F0FF' },    // синий
    10: { primary: '#FDCB6E', secondary: '#FAB825', accent: '#FFF2DD' },   // янтарный
    11: { primary: '#A8E6CF', secondary: '#92D4BA', accent: '#E5F9F0' }    // мятный
};

const UnderDevelopment = ({ slideNumber }) => {
    const colors = colorPalette[slideNumber] || colorPalette[1];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
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
                background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
                animation: 'pulse 3s ease-in-out infinite'
            }} />

            {/* Иконка разработки */}
            <div style={{
                fontSize: '64px',
                marginBottom: '20px',
                filter: `drop-shadow(0 0 20px ${colors.accent})`
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
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '20px',
                background: 'rgba(0,0,0,0.2)',
                padding: '4px 12px',
                borderRadius: '20px'
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
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '500',
                        background: 'rgba(0,0,0,0.3)',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        animation: `bounce 0.5s ease-in-out ${i * 0.1}s infinite`
                    }}>
                        {letter}
                    </span>
                ))}
            </div>

            {/* Стили анимаций */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.1); opacity: 0.9; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
            `}</style>
        </div>
    );
};

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