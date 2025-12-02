const fs = require('fs');
const path = "src/lib/products.ts";

try {
    const content = fs.readFileSync(path, 'utf8');
    const newContent = content.replace(/price:\s*(\d+)/g, (match, price) => {
        const newPrice = parseInt(price) + 1000;
        return `price: ${newPrice}`;
    });

    fs.writeFileSync(path, newContent);
    console.log("Prices updated successfully.");
} catch (err) {
    console.error("Error updating prices:", err);
}
