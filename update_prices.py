import re

file_path = r"c:\Users\Admin\OneDrive\Desktop\New folder (2)\elakkiyaeyarkkai-herbals-e-commerce-main\src\lib\products.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def update_price(match):
    price = int(match.group(1))
    new_price = price + 1000
    return f"price: {new_price}"

# Regex to match 'price: 123'
# This matches both the main product price and the variant price.
new_content = re.sub(r'price:\s*(\d+)', update_price, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Prices updated successfully.")
