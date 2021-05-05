import { Greeter } from "./greeter";
export class HtmlGreeter extends Greeter{
    tagName: string = "h1";
    constructor(greeting: string, tagName: string){
        super(greeting);
        this.tagName = tagName;
    }
    greet(name:string): string {
        return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
    }
}

