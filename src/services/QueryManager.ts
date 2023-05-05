import StateManager from "./StateManager";
import axios from "axios/index";

export class QueryManager {
    public static shared = new QueryManager();

    addTrustedPerson = (name, phone) => {

    };

    getTest = async (id) => {
        const url = `http://a0814711.xsph.ru/api/test/start?phone=${StateManager.shared.user.phone}&test=${id}`;
        try {
            const response = await axios.get<ResponseTest>(url);
            return response.data;
        } catch (error) {
            console.log('Ошибка запроса', error);
            return null;
        }
    }

    getQuestion = (id) => {

    }

    sendAnswer = async (question, id) => {
        const url = `http://a0814711.xsph.ru/api/test/next?phone=${StateManager.shared.user.phone}&test=1&question=${question}&option=${id}`;
        try {
            const response = await axios.get<ResponseTest>(url);
            return response.data;
        } catch (error) {
            console.log('Ошибка запроса', error);
            return null;
        }
    }
    getResults = async () => {
        const url = `http://a0814711.xsph.ru/api/profile/recommendation?phone=${StateManager.shared.user.phone}`;
        try {
            const response = await axios.get<ResultResponse>(url);
            return response.data;
        } catch (error) {
            console.log('Ошибка запроса', error);
            return null;
        }
    }
}