import { useLocation, useNavigate } from 'react-router-dom';
import { SlArrowLeft, SlSettings, SlMenu } from "react-icons/sl";
import WebApp from '@twa-dev/sdk';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    const getTitle = () => {
        switch(location.pathname) {
            case '/': return 'Карта';
            case '/settingsmap': return 'Настройки';
            case '/menu': return 'Главное меню';
            case '/achieves': return 'Достижения';
            case '/rating': return "Рейтинг";
            case '/statistics': return 'Статистика';
            case '/newnote': return 'Добавить запись';
            default: return 'Telegram App';
        }
    };

    const handleBack = () => navigate(-1);

    const handleAction = () => {
      if (location.pathname === '/') navigate('/menu');
      else WebApp.close();
    };

    const handleSettings = () => {
      if (location.pathname === '/') navigate('/settingsmap');
      else WebApp.close();
    }

    const getActionIcon = () => {
        if (location.pathname === '/') return <SlSettings className="tg-header-icon" />;
        return <span className="tg-header-icon">✕</span>;
    };

    return (
        <header className="tg-header">
            <div className="tg-header-container">
                {/* Левая иконка */}
                <div className="tg-header-left">
                    {location.pathname === '/' ? (
                        <SlMenu className="tg-header-icon" onClick={handleAction} />
                    ) : (
                        <SlArrowLeft className="tg-header-icon" onClick={handleBack} />
                    )}
                </div>
                
                {/* Заголовок */}
                <h1 className="tg-header-title">{getTitle()}</h1>
                
                {/* Правая иконка */}
                <div className="tg-header-right">
                    {location.pathname === '/' && (
                        <div onClick={handleSettings}>
                            {getActionIcon()}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}