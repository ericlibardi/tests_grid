export class Ingredient {
    constructor(public name: string, public amount: number) {}

    
    public set changeAmount(value: number) {
        this.amount = this.amount + value;
    }
    
}