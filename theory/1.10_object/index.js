const nicolas = {
  name: "minjoon",
  gender: true,
  age: 26,
  favMovie: [
    { name: "oldBoy", time: 12 },
    { name: "avatar", time: 13 },
  ],
};

const min = {
  favMusic: ["IU", "bewhy", "Zico"],
};
nicolas.name = "joon";

const array = [
  { food: [{ what: "kimchi" }, "choco", "milk"], fatty: "low" },
  { food: "burger", fatty: "high" },
];
console.log(array[1].fatty);
console.log(console);
console.log(nicolas.name);
console.log(array[0].food[0].what);
console.log(nicolas.favMovie[1].name);
