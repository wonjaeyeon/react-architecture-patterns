import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './shared/i18n/i18n';
import {useTranslation} from 'react-i18next';

function App() {

    const {t, i18n} = useTranslation();

    const [count, setCount] = useState(0)

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, []);


    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            {/* 언어 선택 드롭다운 */}
            <div className="lang-switcher">
                <select onChange={handleLanguageChange} defaultValue={i18n.language}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                    <option value="es">Español</option>
                </select>

                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>

                <p className="read-the-docs">
                    {t("viteReact")}
                </p>
            </div>
            <div className="div2">
                <p>{t("versionaa.right")}</p>
            </div>
        </>
    )
}

export default App
