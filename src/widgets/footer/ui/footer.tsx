import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<footer className="flex justify-center items-center mt-auto">
			<p>{t('footer.text.Author')}</p>
		</footer>
	);
};

export { Footer };
