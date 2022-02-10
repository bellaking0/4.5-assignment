const name = Gizmo;
if(name != Gizmo) {
    console.log("You're not my dog!");
}; 
if(name = Gizmo) {
    console.log("Gizmo! How did you learn how to code???");
}
let x = 84;
switch (x) {
    case "48+36":
        console.log("48+36 is equal to 84");
        break;
        case "42*2":
            console.log("42*2 equals to 84")
    default:
        console.log("84 is an even number")
        break;
}
Number(new Date("1997-10-14"))