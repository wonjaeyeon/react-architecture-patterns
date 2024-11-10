
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {BasicLayout} from "../../../shared/ui";
import {Header} from "../../../widgets/header";
import {Footer} from "../../../widgets/footer";
import {Button} from "@radix-ui/themes";

const HomePage: React.FC = () => {
    const [count, setCount] = useState(0);

    const { t } = useTranslation();

    return (
        <BasicLayout headerSlot={<Header />} footerSlot={<Footer />}>
            <h1 className="text-2xl font-bold text-center">{t('homePage.title')}</h1>
            {/*<div className="flex justify-center p-5">*/}
            {/*    <video className="w-3/4" autoPlay loop muted>*/}
            {/*        <source src="/video/frieren-making-moves.mp4" type="video/mp4" />*/}
            {/*        {t('error.video.Placeholder')}*/}
            {/*    </video>*/}
            {/*</div>*/}
            <div className="flex flex-col items-center">
                <p className="mb-2">{t('homePage.text')}</p>
                <Button
                    variant="outline"
                    className="w-[200px]"
                    onClick={() => setCount(count + 1)}
                >
                    {t('homePage.button.Count')}: {count}
                </Button>
            </div>
        </BasicLayout>
    );
};

export { HomePage };
