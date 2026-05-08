type CookieValue = string | null;

export const getCookie = (name: string): CookieValue => {
    if (typeof document === 'undefined') return null; // محافظت برای SSR

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        const cookieValue = parts.pop()?.split(';').shift();
        return cookieValue || null;
    }

    return null;
};