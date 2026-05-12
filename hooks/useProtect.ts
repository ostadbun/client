'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/utils/cookie/get';
import useUserAuthontication from '@/store/useUserAuthontication';
import { IUser } from '@/entity/user';

export function useProtect(redirectTo: string = '/auth') {
    const router = useRouter();
    const t = useUserAuthontication()

    useEffect(() => {

        if (!t.isLogin) {
            const username = getCookie('username');
            const isLoggedIn = !!(username);
            if (!isLoggedIn) {
                router.replace(redirectTo);
            } else {
                const userData: IUser = { username }
                t.Login(userData)
            }
        }
    }, [router, redirectTo]);
}