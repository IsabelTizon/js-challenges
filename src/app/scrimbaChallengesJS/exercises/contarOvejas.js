export function contarOvejas(arr) {
    console.log(`1) Hello contarOvejas exercise!!!!`)

const sheepColours = arr.filter((item => 
    
item.color === 'rojo' && item.name.includes('a'))
);

return sheepColours
}

export function contarOvejas2(arr) {
    console.log(`2) Hello contarOvejas 2 exercise!!!!`)

const sheepColours = arr.filter(item => {
    const lowerName = item.name.toLowerCase();
    return item.color === 'rojo' && lowerName.includes('n') && lowerName.includes("a");
});
return sheepColours
}
