import { HtmlGreeter } from "./htmlgreeter";

describe("html greeter test", function () {
    test("html greeter test 1", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hi", "h1");
        expect(htmlGreeter.greet("Katie")).toBe("<h1>Hi, Katie!</h1>");
    });
});