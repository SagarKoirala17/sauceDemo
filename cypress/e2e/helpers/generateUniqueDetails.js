export function generateUniqueName() {
    const firstNames = ["Sagar", "Nihal", "Avi", "Nitesh", "Siddharth"];

    const lastNames = ["Koirala", "Dhakal", "Bhurtel", "Khatiwoda", "Poudel"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return { firstName, lastName }

}


