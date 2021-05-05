import { LoudGreeter } from "./loudgreeter";

describe("loud greeter test", function () { 
    test("greet test without addvolume", ()=> {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        expect(loudGreeter.greet("Katie")).toBe("Hi, Katie!!")
    });
    test("greet test with addvolume 1x", ()=> {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Katie")).toBe("Hi, Katie!!!")
    });
    test("greet test with addvolume x3", ()=> {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Katie")).toBe("Hi, Katie!!!!!")
    });



});

