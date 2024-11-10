import { BasicLayout } from '../../../shared/ui';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import { useTranslation } from 'react-i18next';
import React from "react";

const StaticRoute: React.FC = () => {
    const { t } = useTranslation();

    return (
        <BasicLayout headerSlot={<Header />} footerSlot={<Footer />}>
            <h1 className="text-2xl font-bold text-center">
                {t('staticRoutePage.title')}
            </h1>
            <div className="flex justify-center p-5">
                <video className="w-3/4" autoPlay loop muted>
                    <source src="/video/nichijou-deer.mp4" type="video/mp4" />
                    {t('error.video.Placeholder')}
                </video>
            </div>
            <p className="text-center">{t('staticRoutePage.text')}</p>
        </BasicLayout>
    );
};

export { StaticRoute };
