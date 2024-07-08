import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {TableData} from "../../constant/data";

let dataList  = TableData
const mock = new MockAdapter(axios);

mock.onGet("/data").reply(200, {
    dataList
});

export const getData = async () => {
    const response = await axios.get("/data");
    return response.data;
};