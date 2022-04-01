import { API_KEY , upperName} from "./import.js";
import snooperizer from "./import.js";

const names =["harmony", "harmony1", "harmony3", "harmony4", "harmony5"];

const [firstName, ,secondName] = names;

console.log(secondName);

const player = {
    name : "harmony", 
    age : 24,
    location : 'houston',
    sport: "baseball"
};
let {name, sport} = player;
console.log(name);

let snoopNames = names.forEach(element => {
    snooperizer(element)
});

console.log(snoopNames);
console.log(API_KEY);