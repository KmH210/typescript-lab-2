//name, jersey
export class Player {
    //long way: create properties, constructor params, this. in constructor
    // name: string;    you do not need this if you have the "public" shortcut
    // jersey: number;
    //short way: add "public" in fron tof constructor params
    
    constructor (public name: string, public jersey: number) {
        // this.name = name;
        // this.jersey = jersey;
    }
    describe():string {
        return `${this.name} wears ${this.jersey}`;
    }
}

//all of that + team(string)
export class TeamPlayer extends Player{
    team: string;
    constructor(name:string, jersey: number, team:string) {
        super(name, jersey);
        this.team = team;
    }
    //override the parent version of describe
    describe(): string{
        //call the parent version of describe as part of the new version
        return super.describe() + ` and plays for the ${this.team}`;
    }
}