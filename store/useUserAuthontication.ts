
import { IUser } from '@/entity/user';
import { redirect, RedirectType } from 'next/navigation';
import { create } from 'zustand'

interface CounterState {
    isLogin: boolean,
    username: string,
    Login: (user: IUser) => void;
    Logout: () => void;
}

const useUserAuthontication = create<CounterState>((set, get) => ({
    isLogin: false,

    username: '',

    Login(user: IUser) {
        set(() => {
            return { username: user.username, isLogin: true }
        })
    },

    Logout() {
        set(() => {
            return { username: '', isLogin: false }
        })


        redirect('/auth',RedirectType.replace)
    },
}));

export default useUserAuthontication;
