// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenirWeight = 75;
let trinketWeight = 112;
let userCountSouvenir = Number(prompt("Введите количество сувениров"));
let userCountTrinket = Number(prompt("Введите количество безделушек"));

let totalWeight = (souvenirWeight * userCountSouvenir) + (trinketWeight * userCountTrinket);

console.log("Общий вес составляет: " + totalWeight + " г.");