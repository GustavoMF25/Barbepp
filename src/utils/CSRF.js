import axios from 'axios';

const obterTokenCSRF = async () => {
    try {
        // Substitua 'http://seu-backend-api.com' pela URL do seu backend Laravel Sanctum
        const response = await axios.get('http://10.205.0.49:8000/api/get-csrf-token');

        console.log(response.data.csrf_token)
        
        // Se a solicitação for bem-sucedida, o Laravel Sanctum deve configurar o cookie CSRF
        // Agora, você pode obter o valor do cookie CSRF
        const csrfToken = extractCSRFTokenFromCookies(response.headers['set-cookie']);

        return csrfToken;
    } catch (error) {
        console.error('Erro ao obter token CSRF:', error);
        throw error;
    }
};

// Função para extrair o valor do cookie CSRF
const extractCSRFTokenFromCookies = (cookieHeader) => {
    const csrfCookie = cookieHeader.find((cookie) => cookie.includes('XSRF-TOKEN'));
    if (csrfCookie) {
        let csrfCookie = csrfCookie.split(';')[0]
        const [, csrfToken] = csrfCookie.split('=');
        return csrfToken;
    }
    return null;
};

export default obterTokenCSRF;