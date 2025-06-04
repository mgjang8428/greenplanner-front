import { create } from 'zustand';

type AccountStore = {
    isSignIn: boolean;
    signIn: () => void;
    signOut: () => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
    isSignIn: false,
    signIn: () => set(() => ({ isSignIn: true })),
    signOut: () => set(() => ({ isSignIn: false })),
}));
