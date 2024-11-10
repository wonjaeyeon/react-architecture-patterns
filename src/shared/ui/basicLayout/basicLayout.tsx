import { ReactNode } from 'react';

interface BasicLayoutProps {
	headerSlot: ReactNode;
	children: ReactNode;
	footerSlot: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({
	headerSlot,
	children,
	footerSlot,
}) => {
	return (
		<div className="flex flex-col justify-center w-full min-h-screen p-3">
			<>{headerSlot}</>
			<>{children}</>
			<>{footerSlot}</>
		</div>
	);
};

export { BasicLayout };
