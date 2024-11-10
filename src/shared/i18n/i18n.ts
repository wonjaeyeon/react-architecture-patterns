// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
//
//
//
// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         fallbackLng: 'en',
//         debug: true,
//         detection: {
//             order: ['queryString', 'cookie'],
//             caches: ['cookie'],
//         },
//
//         interpolation: {
//             escapeValue: false, // react already safes from xss
//         },
//     });
//
// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



i18n.use(initReactI18next).init(
    {

        debug: true,
        fallbackLng: 'en',

        resources: {
            en: {
                translation:{
                    viteReact: "Click on the button to increase the count",
                    right: "Right",
                    versionaa:{
                        right: "RightVersionAA",

                    }
                }
            },
            pt: {
                translation: {
                    viteReact: "--------Clique no botão para aumentar a contagem",
                    right: "Direita"
                }
            },
            es: {
                translation: {
                    viteReact: "----------Haga clic en el botón para aumentar el recuento",
                    right: "Derecha"
                }
            },

        }
    }
)

export default i18n;