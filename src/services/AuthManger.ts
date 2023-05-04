import axios from "axios";

export default class AuthManger {
    public static shared = new AuthManger();

    async signUp(name: string, date: string, phone: string, password: string) {
        const url = `http://a0814711.xsph.ru/api/profile/create?phone=${phone}&name=${name}&date_birth=${date}&password=${password}`;
        try {
            const response = await axios.get<Response>(url);
            return response.data;
        } catch (error) {
            console.log('Ошибка запроса', error);
            return null;
        }
    }

    async signIn(phone: string, password: string): Promise<Response | null> {
        const url = `http://a0814711.xsph.ru/api/profile/get?pass=${password}&phone=${phone}`;
        try {
            const response = await axios.get<Response>(url);
            return response.data;
        } catch (error) {
            console.log('Ошибка запроса', error);
            return null;
        }
    }
}