import { HtmlGreeter } from "./htmlgreeter";

describe("html greeter test", function () {
    test("html greeter test 1", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hi", "h1");
        expect(htmlGreeter.greet("Katie")).toBe("<h1>Hi, Katie!</h1>");
    });
    test("html greeter test 2", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hello", "h2");
        expect(htmlGreeter.greet("Katie")).toBe("<h2>Hello, Katie!</h2>");
    });
    test("html greeter test 3", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Welcome", "h3");
        expect(htmlGreeter.greet("friends")).toBe("<h3>Welcome, friends!</h3>");
    });
});