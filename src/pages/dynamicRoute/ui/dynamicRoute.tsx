
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import {BasicLayout} from "../../../shared/ui";
import {Header} from "../../../widgets/header";
import {Footer} from "../../../widgets/footer";
import React from "react";

const DynamicRoute: React.FC = () => {
    const { id } = useParams();

    const { t } = useTranslation();

    return (
        <BasicLayout headerSlot={<Header />} footerSlot={<Footer />}>
            <h1 className="text-2xl font-bold text-center">
                {t('dynamicRoutePage.title')}
                <span
                    className={`${
                        id !== undefined && Number(id) > 85
                            ? 'text-red-600'
                            : 'text-sky-600'
                    }`}
                >
					{' '}
                    {id}
				</span>
            </h1>
            <div className="flex justify-center p-5">
                <video className="w-3/4" autoPlay loop muted>
                    <source src="/video/mob-100.mp4" type="video/mp4" />
                    {t('error.video.Placeholder')}
                </video>
            </div>
            <p className="text-center">{t('dynamicRoutePage.text')}</p>
        </BasicLayout>
    );
};

export { DynamicRoute };
