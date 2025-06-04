import ReactDom from 'react-dom';

export const SidebarPortal = ({ children }: { children: React.ReactNode }) => {
	const element = document.getElementById('sidebar') as HTMLElement;
	return ReactDom.createPortal(children, element);
};

export const SettingModalPortal = ({ children }: { children: React.ReactNode }) => {
	const element = document.getElementById('setting-modal') as HTMLElement;
	return ReactDom.createPortal(children, element);
};
