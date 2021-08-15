import axios from "axios";

export async function testPing(host, port) {
    const response = await axios.get(`http://${host}:${port}/ping`);
    return response.status === 200;
}
