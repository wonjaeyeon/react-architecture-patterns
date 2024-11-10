import { ChangeLanguage } from '../../../features/localization';
import { ChangeTheme } from '../../../features/theme';
import { Button } from '../../../shared/ui';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const Header: React.FC = () => {
	const [pageID, setPageID] = useState<number>(0);
	const { id } = useParams();

	const { t } = useTranslation();

	const handleClick = () => {
		if (pageID < 100) {
			setPageID(pageID + 1);
		}
	};

	useEffect(() => {
		if (id !== undefined) {
			setPageID(Number(id));
		}
	}, []);

	return (
		<header className="flex flex-col py-2">
			<div className="flex justify-between items-center">
				<div className="h-[32px] flex justify-center">
					<img src="/img/logo.png" alt="logo" />
				</div>
				<div className="flex gap-2">
					<ChangeLanguage />
					<ChangeTheme />
				</div>
			</div>
			<nav className="flex justify-center">
				<Button variant="link" asChild>
					<Link to="/" className="text-lg">
						{t('header.navbar.Home')}
					</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/custom" className="text-lg">
						{t('header.navbar.Static')}
					</Link>
				</Button>
				<Button variant="link" onClick={() => handleClick()} asChild>
					<Link to={`/custom/${pageID}`} className="text-lg">
						{t('header.navbar.Dynamic')}
					</Link>
				</Button>
			</nav>
		</header>
	);
};

export { Header };
