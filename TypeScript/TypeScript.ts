Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz   2.71 GHz
npn i -g typescript 
npm init -y 
tsconfig.json 
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "dist",
        "skipLibCheck": true
    },
    "include": ["src/**/*.ts"]
}
index.ts
let x: number = 3;
tsc
let x: number = 3;
let y: string = "Hello World!";
let z: boolean = true;
let n: any;
let m: unknown;

function p(): void {

}

var nums: number[] = [1, 2, 3, 4];
var tuple: [string, number] = ["Hello", 2]
var obj: object = {};

// Custom Types 
type Animal = {
    name: string;
    age: number;
    colors: string[];
    legs?: number;
}