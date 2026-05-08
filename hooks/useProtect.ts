// hooks/useProtect.ts
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/app/utils/cookie/get';

export function useProtect(redirectTo: string = '/state-pages/noLogined') {
    const router = useRouter();

    useEffect(() => {
        const username = getCookie('username');

        const isLoggedIn = !!(username);

        if (!isLoggedIn) {
            router.replace(redirectTo);
        }
        
    }, [router, redirectTo]);
}