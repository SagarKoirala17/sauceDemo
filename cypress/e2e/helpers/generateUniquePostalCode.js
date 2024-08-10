export function generateUniquePostalCode() {
    const postalCode = Math.floor(10000 + Math.random() * 90000);
    return postalCode.toString();
}

