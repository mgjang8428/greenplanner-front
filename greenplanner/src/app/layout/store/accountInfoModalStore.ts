import { create } from 'zustand';

type AccountInfoModalStore = {
    accountInfoModalIsOpen: boolean;
    accountInfoModalOpen: () => void;
    accountInfoModalClose: () => void;
};

export const useAccountInfoModalStore = create<AccountInfoModalStore>((set) => ({
    accountInfoModalIsOpen: false,
    accountInfoModalOpen: () => set(() => ({ accountInfoModalIsOpen: true })),
    accountInfoModalClose: () => set(() => ({ accountInfoModalIsOpen: false })),
}));
