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
		<header className="flex items-center justify-between p-2 h-12 bg-gray-800">
			{/* 로고 섹션 */}
			<div className="flex items-center gap-4">
				{/*<img src="/img/logo.png" alt="logo" className="h-8" />*/}
				<div className="flex gap-2">
					<ChangeLanguage />
					<ChangeTheme />
				</div>
			</div>

			{/* 네비게이션 */}
			<nav className="flex gap-4">
				<Button variant="link" asChild>
					<Link to="/" className="text-sm text-white">
						{t('header.navbar.Home')}
					</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/custom" className="text-sm text-white">
						{t('header.navbar.Static')}
					</Link>
				</Button>
				<Button variant="link" onClick={() => handleClick()} asChild>
					<Link to={`/custom/${pageID}`} className="text-sm text-white">
						{t('header.navbar.Dynamic')}
					</Link>
				</Button>
			</nav>
		</header>
	);

};

export { Header };
