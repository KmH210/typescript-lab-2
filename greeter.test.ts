import { Greeter } from "./greeter";

describe("Greeter", function (){
    test("Greeting 1", () => {
        let greeter: Greeter = new Greeter("Hello");
        expect(greeter.greet("Katie")).toBe("Hello, Katie!")
    });
    test("Greeting 1", () => {
        let greeter: Greeter = new Greeter("Hi");
        expect(greeter.greet("friend")).toBe("Hi, friend!")
    });
    test("Greeting 1", () => {
        let greeter: Greeter = new Greeter("What's up");
        expect(greeter.greet("dude")).toBe("What's up, dude!")
    });
});