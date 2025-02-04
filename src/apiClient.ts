export const User_URL = 'http://localhost:3334/api';

export async function apiUserRequest(endpoint: string, options: RequestInit) {
    const response = await fetch(`${User_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
    }

    return response.json();
}