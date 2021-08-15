import {testPing} from "./testPing";
import {config} from "dotenv";

let host;
let port;

beforeAll(() => {
    config();
    host = process.env.HOST;
    port = process.env.PORT;
    if (host.length < 5 || isNaN(port)) {
        throw new Error("Must provide host and port");
    }
})

describe('kjk', function () {
    it("Should work", async function () {

        expect(await testPing(host, port)).not.toThrowError()
    })
});
