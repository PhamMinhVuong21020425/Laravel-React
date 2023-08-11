import request from './request';

export async function getCsrfToken() {
    try {
        const res = await request.get('api/csrf-token');
        console.log(res.data);
        return res.data.csrf_token;
    } catch (error) {
        console.log(error);
    }
}
