import { create } from 'zustand';

type SidebarStore = {
	sidebarIsOpen: boolean;
	sidebarOpen: () => void;
	sidebarClose: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
	sidebarIsOpen: false,
	sidebarOpen: () => set(() => ({ sidebarIsOpen: true })),
	sidebarClose: () => set(() => ({ sidebarIsOpen: false })),
}));
