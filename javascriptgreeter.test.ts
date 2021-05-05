import { JavaScriptGreeter } from "./javascriptgreeter";

describe("javascript greeter", function (){
    test("greeting 1", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter ("Hi");
        expect(javascriptGreeter.greet("Katie")).toBe("console.log('Hi, Katie!')");
    });
    test("greeting 2", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter ("Good morning");
        expect(javascriptGreeter.greet("friends")).toBe("console.log('Good morning, friends!')");
    });
    test("greeting 2", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter ("Welcome");
        expect(javascriptGreeter.greet("ladies and gentlemen")).toBe("console.log('Welcome, ladies and gentlemen!')");
    });


});