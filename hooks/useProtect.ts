'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/utils/cookie/get';

export function useProtect(redirectTo: string = '/auth') {
    const router = useRouter();

    useEffect(() => {
        const username = getCookie('username');

        const isLoggedIn = !!(username);

        if (!isLoggedIn) {
            router.replace(redirectTo);
        }

        
        
    }, [router, redirectTo]);
}