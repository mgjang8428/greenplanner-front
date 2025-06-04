import { create } from 'zustand';

type SettingModalStore = {
	settingModalIsOpen: boolean;
	settingModalOpen: () => void;
	settingModalClose: () => void;
};

export const useSettingModalStore = create<SettingModalStore>((set) => ({
	settingModalIsOpen: false,
	settingModalOpen: () => set(() => ({ settingModalIsOpen: true })),
	settingModalClose: () => set(() => ({ settingModalIsOpen: false })),
}));
