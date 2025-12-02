export type Product = {
  id: string
  slug: string
  name: string
  category: string
  size: string
  price: number
  variants?: { label: string; price: number }[]
  imageUrl: string
  shortDescription: string
  description: string
  ingredients?: string[]
  tags?: string[]
}

export const products: Product[] = [
  // HAIR OILS
  {
    id: "karumboola-hair-oil",
    slug: "karumboola-hair-oil",
    name: "Karumboola Hair Oil",
    category: "oils",
    size: "100ml",
    price: 1500,
    variants: [
      { label: "100ml", price: 1500 },
      { label: "200ml", price: 1700 },
      { label: "250ml", price: 1900 },
      { label: "500ml", price: 2100 },
      { label: "1000ml", price: 2500 }
    ],
    imageUrl: "/oil/Karumboola%20Hair%20Oil%20black.jpg",
    shortDescription: "Traditional herbal hair oil for strong, lustrous hair",
    description: "Karumboola Hair Oil is a traditional Tamil herbal formulation that nourishes the scalp and strengthens hair from root to tip. Made with time-tested ingredients, it promotes healthy hair growth and prevents premature greying.",
    ingredients: ["Karumboola extract", "Coconut oil", "Sesame oil", "Traditional herbs"],
    tags: ["herbal", "traditional", "hair growth", "natural"]
  },
  {
    id: "muthiyar-koonthal-oil",
    slug: "muthiyar-koonthal-oil",
    name: "Muthiyar Koonthal Oil",
    category: "oils",
    size: "100ml",
    price: 1700,
    variants: [
      { label: "100ml", price: 1700 }
    ],
    imageUrl: "/oil/Muthiyar%20Koonthal%20Oil.jpg",
    shortDescription: "Premium hair oil for enhanced hair texture and shine",
    description: "Muthiyar Koonthal Oil is a specialized formula that enhances hair texture, adds natural shine, and deeply conditions the hair. Traditional ingredients work together to repair damaged hair and prevent breakage.",
    ingredients: ["Muthiyar Koonthal extract", "Natural oils", "Herbal blend"],
    tags: ["premium", "shine", "conditioning", "traditional"]
  },
  {
    id: "rosemary-hair-growth-oil",
    slug: "rosemary-hair-growth-oil",
    name: "Rosemary Hair Growth Oil",
    category: "oils",
    size: "100ml",
    price: 1500,
    variants: [
      { label: "100ml", price: 1650 },
      { label: "200ml", price: 1850 },
      { label: "250ml", price: 2050 },
      { label: "500ml", price: 2250 },
      { label: "1000ml", price: 2450 }
    ],
    imageUrl: "/oil/Rosemary%20Hair%20Growth%20Oil.jpg",
    shortDescription: "Stimulates hair follicles and promotes natural hair growth",
    description: "Our Rosemary Hair Growth Oil harnesses the power of rosemary essential oil to stimulate blood circulation in the scalp, strengthen hair follicles, and encourage healthy hair growth. Perfect for those seeking fuller, thicker hair naturally.",
    ingredients: ["Rosemary essential oil", "Carrier oils", "Herbal extracts"],
    tags: ["hair growth", "rosemary", "natural", "stimulating"]
  },

  // SHAMPOOS - Alphabetically Ordered
  {
    id: "aavaaram-poo-shampoo",
    slug: "aavaaram-poo-shampoo",
    name: "Aavaaram Poo Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1599,
    variants: [
      { label: "100ml", price: 1599 }
    ],
    imageUrl: "/shampoo/Aavaaram Poo Shampoo.jpg",
    shortDescription: "Traditional Aavaaram flower for hair health",
    description: "Aavaaram Poo Shampoo uses the traditional Aavaaram flower known for its hair care properties. It helps reduce hair fall, adds shine, and promotes healthy hair growth.",
    ingredients: ["Aavaaram flower extract", "Natural cleansers", "Herbal oils"],
    tags: ["traditional", "aavaaram", "hair health"]
  },
  {
    id: "aloevera-shampoo",
    slug: "aloevera-shampoo",
    name: "Aloevera Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1699,
    variants: [
      { label: "100ml", price: 1699 }
    ],
    imageUrl: "/shampoo/Aloevera Shampoo.jpg",
    shortDescription: "Soothing aloe vera for scalp care",
    description: "Aloevera Shampoo soothes and moisturizes the scalp while gently cleansing hair. It helps repair damaged hair and adds natural shine and softness.",
    ingredients: ["Aloe vera extract", "Natural moisturizers", "Herbal blend"],
    tags: ["aloe vera", "soothing", "moisturizing"]
  },
  {
    id: "amla-shampoo",
    slug: "amla-shampoo",
    name: "Amla Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1749,
    variants: [
      { label: "100ml", price: 1749 }
    ],
    imageUrl: "/shampoo/4.jpeg",
    shortDescription: "Vitamin C-rich Amla for hair nourishment",
    description: "Amla Shampoo is packed with Vitamin C and antioxidants that nourish the scalp, strengthen hair follicles, and add natural volume and bounce to your hair.",
    ingredients: ["Amla extract", "Vitamin C", "Natural cleansers"],
    tags: ["vitamin C", "nourishing", "antioxidant"]
  },
  {
    id: "arugampul-shampoo",
    slug: "arugampul-shampoo",
    name: "Arugampul Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1799,
    variants: [
      { label: "100ml", price: 1799 }
    ],
    imageUrl: "/shampoo/Arugampul Shampoo.jpg",
    shortDescription: "Bermuda grass for scalp detoxification",
    description: "Arugampul Shampoo uses Bermuda grass to detoxify the scalp, remove impurities, and promote healthy hair growth. It's ideal for maintaining scalp hygiene.",
    ingredients: ["Arugampul extract", "Natural detoxifiers", "Herbal blend"],
    tags: ["detoxifying", "scalp care", "purifying"]
  },
  {
    id: "bamboo-leaf-shampoo",
    slug: "bamboo-leaf-shampoo",
    name: "Bamboo Leaf Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1849,
    variants: [
      { label: "100ml", price: 1849 }
    ],
    imageUrl: "/shampoo/10.jpeg",
    shortDescription: "Bamboo leaf extract for hair strength",
    description: "Bamboo Leaf Shampoo uses bamboo leaf extract rich in silica to strengthen hair strands, improve hair elasticity, and add natural volume.",
    ingredients: ["Bamboo leaf extract", "Silica", "Natural cleansers"],
    tags: ["bamboo", "strengthening", "volume"]
  },
  {
    id: "bhringraj-shampoo",
    slug: "bhringraj-shampoo",
    name: "Bhringraj Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1899,
    variants: [
      { label: "100ml", price: 1899 }
    ],
    imageUrl: "/shampoo/2.png",
    shortDescription: "Bhringraj for hair growth and thickness",
    description: "Bhringraj Shampoo uses the powerful hair growth properties of bhringraj to promote thick, healthy hair and prevent hair fall.",
    ingredients: ["Bhringraj extract", "Herbal oils", "Natural surfactants"],
    tags: ["bhringraj", "hair growth", "thickness"]
  },
  {
    id: "cucumber-shampoo",
    slug: "cucumber-shampoo",
    name: "Cucumber Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1949,
    variants: [
      { label: "100ml", price: 1949 }
    ],
    imageUrl: "/shampoo/Cucumber Shampoo.jpg",
    shortDescription: "Refreshing cucumber for hydration",
    description: "Cucumber Shampoo provides intense hydration to dry hair, soothes the scalp, and adds natural shine. It's perfect for summer hair care.",
    ingredients: ["Cucumber extract", "Hydrating agents", "Natural cleansers"],
    tags: ["cucumber", "hydrating", "refreshing"]
  },
  {
    id: "curry-leaf-shampoo",
    slug: "curry-leaf-shampoo",
    name: "Curry Leaf Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 1999,
    variants: [
      { label: "100ml", price: 1999 }
    ],
    imageUrl: "/shampoo/7.jpeg",
    shortDescription: "Curry leaf enriched for hair darkening",
    description: "Curry Leaf Shampoo uses the natural properties of curry leaves to darken hair, prevent premature greying, and strengthen hair roots. It also helps reduce dandruff.",
    ingredients: ["Curry leaf extract", "Natural cleansers", "Herbal oils"],
    tags: ["curry leaf", "darkening", "anti-dandruff"]
  },
  {
    id: "coconut-milk-shampoo",
    slug: "coconut-milk-shampoo",
    name: "Coconut Milk Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2049,
    variants: [
      { label: "100ml", price: 2049 }
    ],
    imageUrl: "/shampoo/11.jpeg",
    shortDescription: "Coconut milk for deep conditioning",
    description: "Coconut Milk Shampoo combines the moisturizing properties of coconut milk to deeply condition hair, repair damage, and add natural shine and softness.",
    ingredients: ["Coconut milk", "Natural oils", "Herbal extracts"],
    tags: ["coconut milk", "conditioning", "moisturizing"]
  },
  {
    id: "hibiscus-shampoo",
    slug: "hibiscus-shampoo",
    name: "Hibiscus Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2099,
    variants: [
      { label: "100ml", price: 2099 }
    ],
    imageUrl: "/shampoo/3.jpeg",
    shortDescription: "Hibiscus-enriched shampoo for silky, manageable hair",
    description: "Hibiscus Shampoo leverages the natural conditioning properties of hibiscus flowers to leave hair soft, shiny, and easy to manage. It also helps prevent premature greying.",
    ingredients: ["Hibiscus extract", "Natural emulsifiers", "Botanical oils"],
    tags: ["conditioning", "hibiscus", "shine"]
  },
  {
    id: "mooligai-shampoo",
    slug: "mooligai-shampoo",
    name: "Mooligai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2149,
    variants: [
      { label: "100ml", price: 2149 }
    ],
    imageUrl: "/shampoo/6.jpeg",
    shortDescription: "Multi-herbal blend for complete hair care",
    description: "Mooligai Shampoo combines multiple traditional herbs to provide comprehensive hair care. It cleanses, nourishes, and protects hair naturally.",
    ingredients: ["Multiple herbal extracts", "Natural cleansers", "Botanical oils"],
    tags: ["multi-herbal", "complete care", "natural"]
  },
  {
    id: "kuppaimeni-shampoo",
    slug: "kuppaimeni-shampoo",
    name: "Kuppaimeni Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2199,
    variants: [
      { label: "100ml", price: 2199 }
    ],
    imageUrl: "/shampoo/Kuppaimeni Shampoo.jpg",
    shortDescription: "Kuppaimeni for scalp infection prevention",
    description: "Kuppaimeni Shampoo has natural antimicrobial properties that help prevent scalp infections, reduce dandruff, and promote healthy hair growth.",
    ingredients: ["Kuppaimeni extract", "Antimicrobial agents", "Natural cleansers"],
    tags: ["antimicrobial", "anti-dandruff", "scalp protection"]
  },
  {
    id: "karisalankanni-shampoo",
    slug: "karisalankanni-shampoo",
    name: "Karisalankanni Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2249,
    variants: [
      { label: "100ml", price: 2249 }
    ],
    imageUrl: "/shampoo/Karisalankanni Shampoo.jpg",
    shortDescription: "Karisalankanni for hair darkening and growth",
    description: "Karisalankanni Shampoo uses the powerful properties of Eclipta alba (False Daisy) to promote hair growth, prevent premature greying, and strengthen hair from roots. It's a traditional Ayurvedic remedy for maintaining healthy, dark hair.",
    ingredients: ["Karisalankanni extract", "Natural oils", "Herbal cleansers"],
    tags: ["karisalankanni", "hair growth", "darkening", "ayurvedic"]
  },
  {
    id: "karumboola-shampoo",
    slug: "karumboola-shampoo",
    name: "Karumboola Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2299,
    variants: [
      { label: "100ml", price: 2299 }
    ],
    imageUrl: "/shampoo/5.jpeg",
    shortDescription: "Deep cleansing with Karumboola herbal goodness",
    description: "Karumboola Shampoo provides deep cleansing while nourishing the hair with traditional herbal ingredients. It helps maintain scalp health and promotes strong, lustrous hair.",
    ingredients: ["Karumboola extract", "Herbal surfactants", "Natural oils"],
    tags: ["deep cleansing", "herbal", "traditional"]
  },
  {
    id: "magilam-poo-shampoo",
    slug: "magilam-poo-shampoo",
    name: "Magilam Poo Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2349,
    variants: [
      { label: "100ml", price: 2349 }
    ],
    imageUrl: "/shampoo/Magilam Poo Shampoo.jpg",
    shortDescription: "Magilam flower for fragrant, healthy hair",
    description: "Magilam Poo Shampoo uses the natural fragrance and properties of Magilam flowers to cleanse hair gently while leaving a pleasant, natural scent.",
    ingredients: ["Magilam flower extract", "Natural fragrances", "Herbal cleansers"],
    tags: ["fragrant", "gentle", "natural scent"]
  },
  {
    id: "murungai-keerai-shampoo",
    slug: "murungai-keerai-shampoo",
    name: "Murungai Keerai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2399,
    variants: [
      { label: "100ml", price: 2399 }
    ],
    imageUrl: "/shampoo/8.jpeg",
    shortDescription: "Moringa-enriched for protein-rich hair care",
    description: "Murungai Keerai/Drumstick Leaf Shampoo harnesses the protein-rich properties of moringa leaves to strengthen and repair damaged hair. It adds volume and improves hair elasticity.",
    ingredients: ["Moringa leaf extract", "Plant proteins", "Natural surfactants"],
    tags: ["moringa", "protein-rich", "strengthening"]
  },
  {
    id: "muthiyar-koonthal-shampoo",
    slug: "muthiyar-koonthal-shampoo",
    name: "Muthiyar Koonthal Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2449,
    variants: [
      { label: "100ml", price: 2449 }
    ],
    imageUrl: "/shampoo/9.jpeg",
    shortDescription: "Premium hair oil for enhanced hair texture and shine",
    description: "Muthiyar Koonthal Shampoo is a specialized formula that enhances hair texture, adds natural shine, and deeply conditions the hair. Traditional ingredients work together to repair damaged hair and prevent breakage.",
    ingredients: ["Muthiyar Koonthal extract", "Natural oils", "Herbal blend"],
    tags: ["premium", "shine", "conditioning"]
  },
  {
    id: "onion-shampoo",
    slug: "onion-shampoo",
    name: "Onion Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2499,
    variants: [
      { label: "100ml", price: 2499 }
    ],
    imageUrl: "/shampoo/Onion Shampoo.jpg",
    shortDescription: "Onion extract for hair fall control",
    description: "Onion Shampoo is rich in sulfur which helps reduce hair fall, promotes hair growth, and strengthens hair from roots. It also improves scalp health.",
    ingredients: ["Onion extract", "Sulfur", "Natural cleansers"],
    tags: ["onion", "hair fall control", "growth"]
  },
  {
    id: "pasali-keerai-shampoo",
    slug: "pasali-keerai-shampoo",
    name: "Pasali Keerai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2549,
    variants: [
      { label: "100ml", price: 2549 }
    ],
    imageUrl: "/shampoo/Pasali Keerai Shampoo.jpg",
    shortDescription: "Spinach-enriched for nutrient-rich hair care",
    description: "Pasali Keerai Shampoo is enriched with spinach extracts that provide essential nutrients to hair. It helps improve hair thickness and prevents hair fall.",
    ingredients: ["Spinach extract", "Vitamins", "Natural cleansers"],
    tags: ["spinach", "nutrient-rich", "thickness"]
  },
  {
    id: "patcha-payar-shampoo",
    slug: "patcha-payar-shampoo",
    name: "Patcha Payar Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2599,
    variants: [
      { label: "100ml", price: 2599 }
    ],
    imageUrl: "/shampoo/Patcha Payar Shampoo.jpg",
    shortDescription: "Green gram for protein-rich cleansing",
    description: "Patcha Payar Shampoo contains green gram that provides protein to hair, strengthens hair strands, and adds natural shine. It's excellent for damaged hair repair.",
    ingredients: ["Green gram extract", "Plant proteins", "Natural cleansers"],
    tags: ["protein-rich", "strengthening", "repair"]
  },
  {
    id: "poduthalai-shampoo",
    slug: "poduthalai-shampoo",
    name: "Poduthalai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2699,
    variants: [
      { label: "100ml", price: 2699 }
    ],
    imageUrl: "/shampoo/1.png",
    shortDescription: "Herbal shampoo with Poduthalai for healthy scalp",
    description: "Poduthalai Shampoo cleanses the scalp gently while maintaining natural oils. It helps soothe scalp irritation and promotes overall hair health.",
    ingredients: ["Poduthalai extract", "Natural cleansers", "Herbal blend"],
    tags: ["herbal", "gentle", "scalp care"]
  },
  {
    id: "pungai-ilai-shampoo",
    slug: "pungai-ilai-shampoo",
    name: "Pungai Ilai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2799,
    variants: [
      { label: "100ml", price: 2799 }
    ],
    imageUrl: "/shampoo/Pungai Ilai Shampoo.jpg",
    shortDescription: "Pongam leaf for hair nourishment",
    description: "Pungai Ilai Shampoo nourishes the scalp, strengthens hair, and helps prevent premature greying. It's a traditional remedy for maintaining healthy hair.",
    ingredients: ["Pongam leaf extract", "Natural oils", "Herbal cleansers"],
    tags: ["pongam", "nourishing", "traditional"]
  },
  {
    id: "rosemary-shampoo",
    slug: "rosemary-shampoo",
    name: "Rosemary Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2899,
    variants: [
      { label: "100ml", price: 2899 }
    ],
    imageUrl: "/shampoo/12.jpeg",
    shortDescription: "Rosemary for scalp stimulation and growth",
    description: "Rosemary Shampoo stimulates the scalp, improves blood circulation, and promotes healthy hair growth. It also helps prevent dandruff and adds natural shine.",
    ingredients: ["Rosemary essential oil", "Natural cleansers", "Herbal extracts"],
    tags: ["rosemary", "scalp stimulation", "growth"]
  },
  {
    id: "shangu-poo-shampoo",
    slug: "shangu-poo-shampoo",
    name: "Shangu Poo Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 2999,
    variants: [
      { label: "100ml", price: 2999 }
    ],
    imageUrl: "/shampoo/Shangu Poo Shampoo.jpg",
    shortDescription: "Conch flower extract for hair nourishment",
    description: "Shangu Poo Shampoo uses conch flower extract to nourish hair, add volume, and improve overall hair texture. It's gentle yet effective for daily use.",
    ingredients: ["Shangu Poo extract", "Natural surfactants", "Herbal oils"],
    tags: ["nourishing", "volume", "gentle"]
  },
  {
    id: "vallarai-keerai-shampoo",
    slug: "vallarai-keerai-shampoo",
    name: "Vallarai Keerai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 3199,
    variants: [
      { label: "100ml", price: 3199 }
    ],
    imageUrl: "/shampoo/Vallarai Keerai Shampoo.jpg",
    shortDescription: "Gotu kola for hair growth stimulation",
    description: "Vallarai Keerai Shampoo uses Gotu kola to stimulate hair follicles, improve blood circulation in the scalp, and promote faster hair growth.",
    ingredients: ["Gotu kola extract", "Stimulating agents", "Natural cleansers"],
    tags: ["gotu kola", "hair growth", "stimulating"]
  },
  {
    id: "venthaiya-keerai-shampoo",
    slug: "venthaiya-keerai-shampoo",
    name: "Venthaiya Keerai Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 3399,
    variants: [
      { label: "100ml", price: 3399 }
    ],
    imageUrl: "/shampoo/Venthaiya Keerai Shampoo.jpg",
    shortDescription: "Fenugreek greens for hair strengthening",
    description: "Venthaiya Keerai Shampoo uses fenugreek greens to strengthen hair roots, prevent hair fall, and add volume. It's rich in proteins and nicotinic acid.",
    ingredients: ["Fenugreek greens extract", "Proteins", "Natural surfactants"],
    tags: ["fenugreek", "strengthening", "volume"]
  },
  {
    id: "vettiver-shampoo",
    slug: "vettiver-shampoo",
    name: "Vettiver Shampoo",
    category: "shampoos",
    size: "100ml",
    price: 3499,
    variants: [
      { label: "100ml", price: 3499 }
    ],
    imageUrl: "/shampoo/Vettiver Shampoo.jpg",
    shortDescription: "Cooling vettiver for scalp health",
    description: "Vettiver Shampoo provides a cooling effect to the scalp, reduces heat, and promotes hair growth. It also helps prevent dandruff and scalp irritation.",
    ingredients: ["Vettiver extract", "Cooling agents", "Natural cleansers"],
    tags: ["vettiver", "cooling", "scalp health"]
  },

  // SOAPS - ₹90 (100ml)
  {
    id: "aavaaram-poo-soap",
    slug: "aavaaram-poo-soap",
    name: "Aavaaram Poo Soap",
    category: "soaps",
    size: "100g",
    price: 1599,
    variants: [
      { label: "100g", price: 1599 }
    ],
    imageUrl: "/soaps/1.jpg",
    shortDescription: "Aavaaram flower for skin health",
    description: "Aavaaram Poo Soap uses the traditional Aavaaram flower known for its skin care properties. It helps cleanse, brighten, and maintain healthy skin naturally.",
    ingredients: ["Aavaaram flower extract", "Natural oils", "Herbal blend"],
    tags: ["traditional", "brightening", "cleansing"]
  },
  {
    id: "butterfly-pea-flower-soap",
    slug: "butterfly-pea-flower-soap",
    name: "Butterfly Pea Flower Soap",
    category: "soaps",
    size: "100g",
    price: 1649,
    variants: [
      { label: "100g", price: 1649 }
    ],
    imageUrl: "/soaps/Butterfly Pea Flower Soap.png",
    shortDescription: "Butterfly pea flower for skin rejuvenation",
    description: "Butterfly Pea Flower Soap contains antioxidants that help rejuvenate skin, improve elasticity, and provide anti-aging benefits. It leaves skin feeling soft and refreshed.",
    ingredients: ["Butterfly pea flower extract", "Natural oils", "Glycerin"],
    tags: ["antioxidant", "rejuvenating", "anti-aging"]
  },

  {
    id: "charcoal-soap",
    slug: "charcoal-soap",
    name: "Charcoal Soap",
    category: "soaps",
    size: "100g",
    price: 1749,
    variants: [
      { label: "100g", price: 1749 }
    ],
    imageUrl: "/soaps/Charcoal Soap.jpg",
    shortDescription: "Activated charcoal for deep cleansing",
    description: "Charcoal Soap uses activated charcoal to deeply cleanse pores, remove impurities, and control excess oil. Perfect for acne-prone skin.",
    ingredients: ["Activated charcoal", "Natural cleansers", "Essential oils"],
    tags: ["deep cleansing", "detoxifying", "oil control"]
  },
  {
    id: "drumstick-leaves-soap",
    slug: "drumstick-leaves-soap",
    name: "Drumstick Leaves Soap",
    category: "soaps",
    size: "100g",
    price: 1799,
    variants: [
      { label: "100g", price: 1799 }
    ],
    imageUrl: "/soaps/7.jpg",
    shortDescription: "Moringa for nutrient-rich cleansing",
    description: "Drumstick Leaves Soap is rich in vitamins and minerals that nourish the skin, improve texture, and provide anti-aging benefits.",
    ingredients: ["Moringa leaf extract", "Vitamins", "Natural oils"],
    tags: ["moringa", "nutrient-rich", "anti-aging"]
  },
  {
    id: "fullers-earth-soap",
    slug: "fullers-earth-soap",
    name: "Fuller's Earth Soap",
    category: "soaps",
    size: "100g",
    price: 1849,
    variants: [
      { label: "100g", price: 1849 }
    ],
    imageUrl: "/soaps/Fuller's Earth Soap.png",
    shortDescription: "Multani mitti for oil absorption",
    description: "Fuller's Earth Soap contains multani mitti that absorbs excess oil, cleanses deeply, and tightens pores. Ideal for oily and combination skin.",
    ingredients: ["Fuller's earth", "Natural clay", "Herbal extracts"],
    tags: ["oil control", "pore tightening", "cleansing"]
  },
  {
    id: "green-gram-soap",
    slug: "green-gram-soap",
    name: "Green Gram Soap",
    category: "soaps",
    size: "100g",
    price: 1899,
    variants: [
      { label: "100g", price: 1899 }
    ],
    imageUrl: "/soaps/Green Gram Soap.jpg",
    shortDescription: "Green gram for gentle exfoliation",
    description: "Green Gram Soap gently exfoliates dead skin cells, brightens complexion, and provides natural nourishment. It's suitable for all skin types.",
    ingredients: ["Green gram powder", "Natural oils", "Glycerin"],
    tags: ["exfoliating", "brightening", "gentle"]
  },
  {
    id: "holy-basil-soap",
    slug: "holy-basil-soap",
    name: "Holy Basil Soap",
    category: "soaps",
    size: "100g",
    price: 1949,
    variants: [
      { label: "100g", price: 1949 }
    ],
    imageUrl: "/soaps/6.jpg",
    shortDescription: "Holy basil for skin detoxification",
    description: "Holy Basil Soap detoxifies the skin, fights bacteria, and provides antioxidant protection. It's excellent for maintaining clear, healthy skin.",
    ingredients: ["Holy basil extract", "Antioxidants", "Natural oils"],
    tags: ["holy basil", "detoxifying", "antibacterial"]
  },
  {
    id: "kuppaimeni-soap",
    slug: "kuppaimeni-soap",
    name: "Kuppaimeni Soap",
    category: "soaps",
    size: "100g",
    price: 1999,
    variants: [
      { label: "100g", price: 1999 }
    ],
    imageUrl: "/soaps/3.jpg",
    shortDescription: "Kuppaimeni for skin infection prevention",
    description: "Kuppaimeni Soap has natural antimicrobial properties that help prevent skin infections, treat skin conditions, and maintain overall skin health.",
    ingredients: ["Kuppaimeni extract", "Antimicrobial agents", "Natural oils"],
    tags: ["antimicrobial", "protective", "healing"]
  },
  {
    id: "milkweed-soap",
    slug: "milkweed-soap",
    name: "Milkweed Soap",
    category: "soaps",
    size: "100g",
    price: 2049,
    variants: [
      { label: "100g", price: 2049 }
    ],
    imageUrl: "/soaps/4.png",
    shortDescription: "Milkweed for gentle skin care",
    description: "Milkweed Soap provides gentle cleansing while nourishing the skin. It's suitable for sensitive skin and helps maintain skin's natural moisture balance.",
    ingredients: ["Milkweed extract", "Gentle cleansers", "Natural oils"],
    tags: ["gentle", "nourishing", "sensitive skin"]
  },
  {
    id: "local-turmeric-root-soap",
    slug: "local-turmeric-root-soap",
    name: "Local Turmeric Root Soap",
    category: "soaps",
    size: "100g",
    price: 2099,
    variants: [
      { label: "100g", price: 2099 }
    ],
    imageUrl: "/soaps/Local Turmeric Root soap.jpg",
    shortDescription: "Local turmeric for skin brightening",
    description: "Local Turmeric Root Soap uses fresh turmeric to brighten skin, reduce dark spots, and provide anti-inflammatory benefits. Traditional remedy for glowing skin.",
    ingredients: ["Local turmeric root", "Natural oils", "Herbal extracts"],
    tags: ["brightening", "anti-inflammatory", "traditional"]
  },
  {
    id: "manjistha-soap",
    slug: "manjistha-soap",
    name: "Manjistha Soap",
    category: "soaps",
    size: "100g",
    price: 2149,
    variants: [
      { label: "100g", price: 2149 }
    ],
    imageUrl: "/soaps/Manjistha Soap.png",
    shortDescription: "Manjistha for even skin tone",
    description: "Manjistha Soap helps achieve even skin tone, reduces pigmentation, and provides natural glow. It's an Ayurvedic remedy for clear, radiant skin.",
    ingredients: ["Manjistha extract", "Natural oils", "Glycerin"],
    tags: ["even tone", "ayurvedic", "radiant"]
  },
  {
    id: "nalangu-maavu-soap",
    slug: "nalangu-maavu-soap",
    name: "Nalangu Maavu Soap",
    category: "soaps",
    size: "100g",
    price: 2199,
    variants: [
      { label: "100g", price: 2199 }
    ],
    imageUrl: "/soaps/Nalangu Maavu.png",
    shortDescription: "Traditional Nalangu Maavu for bridal glow",
    description: "Nalangu Maavu Soap is a traditional blend used for bridal beauty. It brightens skin, removes tan, and provides a natural glow.",
    ingredients: ["Nalangu maavu blend", "Turmeric", "Natural oils"],
    tags: ["traditional", "brightening", "bridal"]
  },
  {
    id: "neem-leaf-soap",
    slug: "neem-leaf-soap",
    name: "Neem Leaf Soap",
    category: "soaps",
    size: "100g",
    price: 2249,
    variants: [
      { label: "100g", price: 2249 }
    ],
    imageUrl: "/soaps/Neem Leaf Soap.png",
    shortDescription: "Neem for antibacterial protection",
    description: "Neem Leaf Soap has powerful antibacterial properties that help prevent acne, soothe skin irritation, and maintain healthy skin.",
    ingredients: ["Neem leaf extract", "Natural oils", "Herbal blend"],
    tags: ["antibacterial", "acne control", "soothing"]
  },
  {
    id: "orange-soap",
    slug: "orange-soap",
    name: "Orange Soap",
    category: "soaps",
    size: "100g",
    price: 2299,
    variants: [
      { label: "100g", price: 2299 }
    ],
    imageUrl: "/soaps/Orange-Soap.jpg",
    shortDescription: "Citrus freshness with Vitamin C boost",
    description: "Orange Soap provides a refreshing citrus experience while delivering Vitamin C to brighten skin and reduce dark spots. It's energizing and revitalizing.",
    ingredients: ["Orange extract", "Vitamin C", "Essential oils"],
    tags: ["citrus", "vitamin C", "refreshing"]
  },
  {
    id: "papaya-soap",
    slug: "papaya-soap",
    name: "Papaya Soap",
    category: "soaps",
    size: "100g",
    price: 2349,
    variants: [
      { label: "100g", price: 2349 }
    ],
    imageUrl: "/soaps/Pappaya Soap.jpg",
    shortDescription: "Papaya enzymes for gentle exfoliation",
    description: "Papaya Soap contains natural papain enzymes that gently exfoliate dead skin cells, revealing softer, brighter skin. It helps reduce blemishes and even skin tone.",
    ingredients: ["Papaya extract", "Papain enzymes", "Natural oils"],
    tags: ["exfoliating", "brightening", "enzyme"]
  },
  {
    id: "paneer-rose-soap",
    slug: "paneer-rose-soap",
    name: "Paneer Rose Soap",
    category: "soaps",
    size: "100g",
    price: 2399,
    variants: [
      { label: "100g", price: 2399 }
    ],
    imageUrl: "/soaps/2.jpg",
    shortDescription: "Rose for fragrance and skin softening",
    description: "Paneer Rose Soap combines the beauty benefits of rose with moisturizing properties. It softens skin, provides a pleasant fragrance, and maintains skin's natural pH balance.",
    ingredients: ["Rose extract", "Rose water", "Natural oils"],
    tags: ["rose", "fragrant", "softening"]
  },
  {
    id: "pomegranate-soap",
    slug: "pomegranate-soap",
    name: "Pomegranate Soap",
    category: "soaps",
    size: "100g",
    price: 2449,
    variants: [
      { label: "100g", price: 2449 }
    ],
    imageUrl: "/soaps/Pomegranate Soap.jpg",
    shortDescription: "Pomegranate for antioxidant protection",
    description: "Pomegranate Soap is rich in antioxidants that protect skin from damage, improve elasticity, and provide anti-aging benefits.",
    ingredients: ["Pomegranate extract", "Natural oils", "Vitamins"],
    tags: ["antioxidant", "anti-aging", "protective"]
  },
  {
    id: "potato-soap",
    slug: "potato-soap",
    name: "Potato Soap",
    category: "soaps",
    size: "100g",
    price: 2499,
    variants: [
      { label: "100g", price: 2499 }
    ],
    imageUrl: "/soaps/Potato soap.jpg",
    shortDescription: "Potato for dark spot reduction",
    description: "Potato Soap naturally lightens dark spots, reduces under-eye circles, and evens skin tone. It's rich in vitamins and minerals that nourish the skin.",
    ingredients: ["Potato extract", "Natural enzymes", "Glycerin"],
    tags: ["lightening", "dark spot reduction", "nourishing"]
  },
  {
    id: "pungai-ilai-soap",
    slug: "pungai-ilai-soap",
    name: "Pungai Ilai Soap",
    category: "soaps",
    size: "100g",
    price: 2549,
    variants: [
      { label: "100g", price: 2549 }
    ],
    imageUrl: "/soaps/5.jpg",
    shortDescription: "Pongam leaf for skin purification",
    description: "Pungai Ilai Soap purifies the skin, helps treat skin conditions, and provides natural protection. It's a traditional remedy for healthy skin.",
    ingredients: ["Pongam leaf extract", "Natural cleansers", "Herbal oils"],
    tags: ["purifying", "traditional", "protective"]
  },
  {
    id: "red-sandalwood-soap",
    slug: "red-sandalwood-soap",
    name: "Red Sandalwood Soap",
    category: "soaps",
    size: "100g",
    price: 2599,
    variants: [
      { label: "100g", price: 2599 }
    ],
    imageUrl: "/soaps/Red Sandalwood Soap.png",
    shortDescription: "Red sandalwood for cooling and glow",
    description: "Red Sandalwood Soap provides a cooling effect, reduces tan, and adds natural glow to skin. It's a traditional beauty secret for radiant skin.",
    ingredients: ["Red sandalwood powder", "Natural oils", "Herbal extracts"],
    tags: ["cooling", "glowing", "traditional"]
  },
  {
    id: "rice-water-soap",
    slug: "rice-water-soap",
    name: "Rice Water Soap",
    category: "soaps",
    size: "100g",
    price: 2699,
    variants: [
      { label: "100g", price: 2699 }
    ],
    imageUrl: "/soaps/rice water soap.jpg",
    shortDescription: "Rice water for skin brightening",
    description: "Rice Water Soap uses the traditional beauty secret of rice water to brighten skin, tighten pores, and provide a smooth, even complexion.",
    ingredients: ["Rice water", "Rice extract", "Natural oils"],
    tags: ["brightening", "pore tightening", "traditional"]
  },
  {
    id: "saffron-soap",
    slug: "saffron-soap",
    name: "Saffron Soap",
    category: "soaps",
    size: "100g",
    price: 2799,
    variants: [
      { label: "100g", price: 2799 }
    ],
    imageUrl: "/soaps/Saffron Soap.jpg",
    shortDescription: "Saffron for luxurious skin glow",
    description: "Saffron Soap is a luxurious soap that brightens skin, improves complexion, and provides a natural glow. It's enriched with the goodness of pure saffron.",
    ingredients: ["Saffron strands", "Natural oils", "Glycerin"],
    tags: ["luxurious", "brightening", "glowing"]
  },
  {
    id: "skin-whitening-carrot-soap",
    slug: "skin-whitening-carrot-soap",
    name: "Skin Whitening Carrot Soap",
    category: "soaps",
    size: "100g",
    price: 1799,
    variants: [
      { label: "100g", price: 1799 }
    ],
    imageUrl: "/soaps/Skin Whitening Carrot Soap.jpg",
    shortDescription: "Carrot soap for skin whitening",
    description: "Skin Whitening Carrot Soap is rich in beta-carotene and antioxidants that help brighten skin, improve complexion, and protect against sun damage.",
    ingredients: ["Carrot extract", "Beta-carotene", "Natural oils"],
    tags: ["whitening", "brightening", "antioxidant"]
  },
  {
    id: "tea-tree-soap",
    slug: "tea-tree-soap",
    name: "Tea Tree Soap",
    category: "soaps",
    size: "100g",
    price: 2899,
    variants: [
      { label: "100g", price: 2899 }
    ],
    imageUrl: "/soaps/8.jpg",
    shortDescription: "Tea tree for acne control",
    description: "Tea Tree Soap effectively controls acne, reduces inflammation, and maintains clear skin. Its natural antimicrobial properties help prevent breakouts and soothe problem skin.",
    ingredients: ["Tea tree oil", "Eucalyptus oil", "Natural cleansers"],
    tags: ["acne control", "antimicrobial", "clear skin"]
  },
  {
    id: "vellai-poosani-soap",
    slug: "vellai-poosani-soap",
    name: "Vellai Poosani Soap",
    category: "soaps",
    size: "100g",
    price: 2949,
    variants: [
      { label: "100g", price: 2949 }
    ],
    imageUrl: "/soaps/Vellai Poosani Soap.png",
    shortDescription: "White pumpkin for cooling and soothing",
    description: "Vellai Poosani (White Pumpkin) Soap has a natural cooling effect that soothes irritated skin, reduces inflammation, and moisturizes deeply. Perfect for sensitive skin.",
    ingredients: ["White pumpkin extract", "Cooling agents", "Glycerin"],
    tags: ["cooling", "soothing", "sensitive skin"]
  },
  {
    id: "wild-turmeric-soap",
    slug: "wild-turmeric-soap",
    name: "Wild Turmeric Soap",
    category: "soaps",
    size: "100g",
    price: 2999,
    variants: [
      { label: "100g", price: 2999 }
    ],
    imageUrl: "/soaps/Wild Turmeric Soap.jpg",
    shortDescription: "Wild turmeric for skin healing",
    description: "Wild Turmeric Soap uses kasturi manjal (wild turmeric) to heal skin, reduce blemishes, and provide a natural glow without staining the skin.",
    ingredients: ["Wild turmeric", "Natural oils", "Herbal extracts"],
    tags: ["healing", "non-staining", "glowing"]
  },

  // HAIR TREATMENTS
  {
    id: "hair-pack-powder",
    slug: "hair-pack-powder",
    name: "Hair Pack Powder",
    category: "hair-treatments",
    size: "100g",
    price: 1750,
    variants: [
      { label: "100g", price: 1750 }
    ],
    imageUrl: "/hair/Hair Pack Powder.png",
    shortDescription: "Herbal hair pack for deep conditioning",
    description: "Our Hair Pack Powder is a blend of traditional herbs that deeply condition, strengthen roots, and promote healthy hair growth.",
    ingredients: ["Hibiscus", "Amla", "Fenugreek", "Curry leaves"],
    tags: ["hair pack", "conditioning", "herbal"]
  },
  {
    id: "hair-serum",
    slug: "hair-serum",
    name: "Hair Serum",
    category: "hair-treatments",
    size: "100g",
    price: 1999,
    variants: [
      { label: "100g", price: 1999 }
    ],
    imageUrl: "/hair/Hair Serum.jpg",
    shortDescription: "Nourishing serum for frizz-free hair",
    description: "This Hair Serum controls frizz, adds shine, and protects hair from environmental damage. It leaves hair smooth and manageable.",
    ingredients: ["Argan oil", "Vitamin E", "Aloe vera"],
    tags: ["serum", "frizz control", "shine"]
  },
  {
    id: "hair-wash-powder",
    slug: "hair-wash-powder",
    name: "Hair Wash Powder",
    category: "hair-treatments",
    size: "100g",
    price: 2299,
    variants: [
      { label: "100g", price: 2299 }
    ],
    imageUrl: "/hair/Hair Wash Powder.png",
    shortDescription: "Natural herbal hair wash",
    description: "A natural alternative to chemical shampoos, this Hair Wash Powder cleanses the scalp gently without stripping natural oils.",
    ingredients: ["Shikakai", "Reetha", "Amla", "Hibiscus"],
    tags: ["hair wash", "natural cleanser", "herbal"]
  },
  {
    id: "karungoola-hair-dye",
    slug: "karungoola-hair-dye",
    name: "Karungoola Hair Dye",
    category: "hair-treatments",
    size: "100ml",
    price: 2599,
    variants: [
      { label: "100ml", price: 2599 }
    ],
    imageUrl: "/hair/Karungoola Hair Dye.jpg",
    shortDescription: "Natural black hair dye",
    description: "Karungoola Hair Dye provides a natural black color to grey hair while nourishing the scalp. It is free from harmful chemicals.",
    ingredients: ["Indigo", "Henna", "Amla", "Karungoola extract"],
    tags: ["hair dye", "natural black", "chemical-free"]
  },

  // FACE CARE
  {
    id: "avocado-cream",
    slug: "avocado-cream",
    name: "Avocado Cream",
    category: "face-care",
    size: "100ml",
    price: 1899,
    variants: [
      { label: "100ml", price: 1899 }
    ],
    imageUrl: "/Business and Product photos/Avacado Cream.jpg",
    shortDescription: "Rich moisturizing cream with avocado oil",
    description: "Avocado Cream is rich in fatty acids and vitamins that deeply moisturize and nourish the skin. Ideal for dry and sensitive skin.",
    ingredients: ["Avocado oil", "Shea butter", "Vitamin E"],
    tags: ["moisturizing", "nourishing", "dry skin"]
  },
  {
    id: "beetroot-lip-balm",
    slug: "beetroot-lip-balm",
    name: "Beetroot Lip Balm",
    category: "face-care",
    size: "15g",
    price: 1149,
    variants: [
      { label: "15g", price: 1149 }
    ],
    imageUrl: "/Business and Product photos/Beetroot lip balm (2).jpg",
    shortDescription: "Natural beetroot tint for lips",
    description: "Beetroot Lip Balm provides a natural rosy tint while keeping your lips soft and hydrated. Rich in antioxidants.",
    ingredients: ["Beetroot extract", "Beeswax", "Shea butter"],
    tags: ["lip balm", "tinted", "hydrating"]
  },
  {
    id: "carrot-lip-balm",
    slug: "carrot-lip-balm",
    name: "Carrot Lip Balm",
    category: "face-care",
    size: "15g",
    price: 1179,
    variants: [
      { label: "15g", price: 1179 }
    ],
    imageUrl: "/Business and Product photos/Carrot lip balm.jpg",
    shortDescription: "Nourishing carrot lip care",
    description: "Carrot Lip Balm is packed with vitamins to repair dry, chapped lips and protect them from sun damage.",
    ingredients: ["Carrot oil", "Cocoa butter", "Vitamin E"],
    tags: ["lip care", "repairing", "sun protection"]
  },
  {
    id: "day-cream",
    slug: "day-cream",
    name: "Day Cream",
    category: "face-care",
    size: "100g",
    price: 1799,
    variants: [
      { label: "100g", price: 1799 }
    ],
    imageUrl: "/Face/Day Cream.jpg",
    shortDescription: "Daily moisturizing cream for sun protection",
    description: "Our Day Cream provides all-day moisture and protection against environmental stressors. It keeps skin hydrated and glowing.",
    ingredients: ["Aloe vera", "Vitamin E", "SPF agents"],
    tags: ["moisturizing", "sun protection", "daily care"]
  },
  {
    id: "face-cream",
    slug: "face-cream",
    name: "Face Cream",
    category: "face-care",
    size: "100g",
    price: 2099,
    variants: [
      { label: "100g", price: 2099 }
    ],
    imageUrl: "/Face/Face Cream.jpg",
    shortDescription: "Nourishing face cream for soft skin",
    description: "This Face Cream deeply nourishes the skin, improving texture and elasticity. Suitable for all skin types.",
    ingredients: ["Shea butter", "Almond oil", "Herbal extracts"],
    tags: ["nourishing", "soft skin", "all skin types"]
  },
  {
    id: "face-pack-powder",
    slug: "face-pack-powder",
    name: "Face Pack Powder",
    category: "face-care",
    size: "100g",
    price: 2399,
    variants: [
      { label: "100g", price: 2399 }
    ],
    imageUrl: "/Face/Face Pack Powder.png",
    shortDescription: "Herbal face pack for instant glow",
    description: "Our Face Pack Powder cleanses pores, removes tan, and gives an instant natural glow. Made with traditional herbs.",
    ingredients: ["Multani mitti", "Sandalwood", "Turmeric"],
    tags: ["face pack", "glow", "detan"]
  },
  {
    id: "face-serum",
    slug: "face-serum",
    name: "Face Serum",
    category: "face-care",
    size: "100ml",
    price: 2699,
    variants: [
      { label: "100ml", price: 2699 }
    ],
    imageUrl: "/Face/Face Serum.jpg",
    shortDescription: "Brightening serum for radiant skin",
    description: "This Face Serum penetrates deep into the skin to brighten complexion and reduce dark spots. Lightweight and non-greasy.",
    ingredients: ["Vitamin C", "Hyaluronic acid", "Botanical extracts"],
    tags: ["serum", "brightening", "anti-aging"]
  },
  {
    id: "flaxseed-gel",
    slug: "flaxseed-gel",
    name: "Flaxseed Gel",
    category: "face-care",
    size: "100ml",
    price: 1799,
    variants: [
      { label: "100ml", price: 1799 }
    ],
    imageUrl: "/Business and Product photos/Flaxseed Gel.jpg",
    shortDescription: "Natural gel for skin tightening",
    description: "Flaxseed Gel is rich in Omega-3 fatty acids that help tighten skin, reduce fine lines, and provide a healthy glow.",
    ingredients: ["Flaxseed extract", "Aloe vera", "Vitamin E"],
    tags: ["tightening", "anti-aging", "glow"]
  },
  {
    id: "fresh-hydrated-skin-cream",
    slug: "fresh-hydrated-skin-cream",
    name: "Fresh and Hydrated Skin Cream",
    category: "face-care",
    size: "100ml",
    price: 1999,
    variants: [
      { label: "100ml", price: 1999 }
    ],
    imageUrl: "/Business and Product photos/Fresh and Hydrated Skin  Cream.jpg",
    shortDescription: "Deep hydration for fresh skin",
    description: "Keep your skin fresh and hydrated all day long with this lightweight, non-greasy cream. Perfect for daily use.",
    ingredients: ["Cucumber extract", "Hyaluronic acid", "Vitamin E"],
    tags: ["hydration", "freshness", "daily care"]
  },
  {
    id: "kojic-brightening-cream",
    slug: "kojic-brightening-cream",
    name: "Kojic Brightening Cream",
    category: "face-care",
    size: "100ml",
    price: 2199,
    variants: [
      { label: "100ml", price: 2199 }
    ],
    imageUrl: "/Business and Product photos/Kojic Brightening Cream.jpg",
    shortDescription: "Brightening cream for uneven skin tone",
    description: "Kojic Brightening Cream helps fade dark spots, hyperpigmentation, and acne scars, revealing a brighter and more even complexion.",
    ingredients: ["Kojic acid", "Licorice extract", "Vitamin C"],
    tags: ["brightening", "dark spots", "pigmentation"]
  },
  {
    id: "kumkumadi-cream",
    slug: "kumkumadi-cream",
    name: "Kumkumadi Cream",
    category: "face-care",
    size: "100ml",
    price: 2399,
    variants: [
      { label: "100ml", price: 2399 }
    ],
    imageUrl: "/Business and Product photos/Kumkumadi Cream.jpg",
    shortDescription: "Traditional saffron cream for radiance",
    description: "Enriched with the goodness of Kumkumadi oil, this cream improves skin texture, adds radiance, and fights signs of aging.",
    ingredients: ["Saffron", "Sandalwood", "Manjistha"],
    tags: ["radiance", "anti-aging", "ayurvedic"]
  },
  {
    id: "night-cream",
    slug: "night-cream",
    name: "Night Cream",
    category: "face-care",
    size: "100g",
    price: 2999,
    variants: [
      { label: "100g", price: 2999 }
    ],
    imageUrl: "/Face/night cream.jpg",
    shortDescription: "Repairing night cream for skin rejuvenation",
    description: "Our Night Cream works while you sleep to repair and rejuvenate your skin. Wake up to refreshed, youthful-looking skin.",
    ingredients: ["Retinol", "Collagen", "Essential oils"],
    tags: ["night care", "repairing", "rejuvenating"]
  },
  {
    id: "pure-aloe-vera-gel",
    slug: "pure-aloe-vera-gel",
    name: "Pure Aloe Vera Gel",
    category: "face-care",
    size: "100ml",
    price: 2499,
    variants: [
      { label: "100ml", price: 2499 }
    ],
    imageUrl: "/Business and Product photos/Pure Aloe Vera Gel.jpg",
    shortDescription: "99% pure soothing aloe vera gel",
    description: "Our Pure Aloe Vera Gel soothes, hydrates, and heals the skin. It is excellent for sunburns, acne, and dry skin.",
    ingredients: ["Aloe vera extract", "Vitamin E"],
    tags: ["soothing", "hydrating", "multipurpose"]
  },
  {
    id: "saffron-lip-balm",
    slug: "saffron-lip-balm",
    name: "Saffron Lip Balm",
    category: "face-care",
    size: "15g",
    price: 1249,
    variants: [
      { label: "15g", price: 1249 }
    ],
    imageUrl: "/Business and Product photos/Saffron lip balm.jpg",
    shortDescription: "Luxurious saffron lip lightening",
    description: "Saffron Lip Balm helps lighten dark lips and provides deep moisturization for soft, pink lips.",
    ingredients: ["Saffron", "Almond oil", "Ghee"],
    tags: ["lip lightening", "luxurious", "moisturizing"]
  },
  {
    id: "strawberry-lip-balm",
    slug: "strawberry-lip-balm",
    name: "Strawberry Lip Balm",
    category: "face-care",
    size: "15g",
    price: 1199,
    variants: [
      { label: "15g", price: 1199 }
    ],
    imageUrl: "/Business and Product photos/Strawberry lip balm.jpg",
    shortDescription: "Sweet strawberry hydration",
    description: "Strawberry Lip Balm offers a sweet fragrance and intense hydration, leaving your lips smooth and kissable.",
    ingredients: ["Strawberry extract", "Jojoba oil", "Vitamin E"],
    tags: ["fruity", "hydrating", "softening"]
  },

  // FACE OILS
  {
    id: "kumkumaadhi-oil",
    slug: "kumkumaadhi-oil",
    name: "Kumkumaadhi Oil",
    category: "face-oils",
    size: "50ml",
    price: 1799,
    variants: [
      { label: "50ml", price: 1799 }
    ],
    imageUrl: "/Face oil/Kumkumaadhi Oil.jpg",
    shortDescription: "Traditional beauty oil for radiant skin",
    description: "Kumkumaadhi Oil is a legendary Ayurvedic formulation that brightens skin, reduces dark circles, and improves complexion. Enriched with saffron and other precious herbs.",
    ingredients: ["Saffron", "Sandalwood", "Manjistha", "Lotus pollen"],
    tags: ["brightening", "radiant", "ayurvedic"]
  },
  {
    id: "manjistha-face-oil",
    slug: "manjistha-face-oil",
    name: "Manjistha Face Oil",
    category: "face-oils",
    size: "50ml",
    price: 1999,
    variants: [
      { label: "50ml", price: 1999 }
    ],
    imageUrl: "/Face oil/Manjistha face oil.jpg",
    shortDescription: "Manjistha oil for even skin tone",
    description: "Manjistha Face Oil helps improve skin texture, reduce pigmentation, and promote an even skin tone. It deeply nourishes and revitalizes the skin.",
    ingredients: ["Manjistha", "Sesame oil", "Herbal extracts"],
    tags: ["even tone", "pigmentation", "nourishing"]
  },

  // COMBO PACKS
  {
    id: "black-cumin-hair-oil",
    slug: "black-cumin-hair-oil",
    name: "Black Cumin Hair Oil",
    category: "combo-packs",
    size: "100ml",
    price: 1799,
    variants: [
      { label: "100ml", price: 1799 }
    ],
    imageUrl: "/Business and Product photos/Black Cumin Hair Oil.jpg",
    shortDescription: "Pure black cumin oil for hair growth",
    description: "Black Cumin Hair Oil strengthens hair follicles, reduces hair fall, and promotes healthy hair growth.",
    ingredients: ["Black cumin extract", "Coconut oil", "Herbal extracts"],
    tags: ["hair oil", "growth", "strengthening"]
  },
  {
    id: "dandruff-sembaruthi-black-cumin-combo",
    slug: "dandruff-sembaruthi-black-cumin-combo",
    name: "Dandruff, Sembaruthi & Black Cumin Combo",
    category: "combo-packs",
    size: "100ml",
    price: 2299,
    variants: [
      { label: "100ml", price: 2299 }
    ],
    imageUrl: "/Business and Product photos/Dandruff and Sembaruthi Shampoo and Black Cumin Hair oil.jpg",
    shortDescription: "Complete hair care solution",
    description: "The ultimate combo for dandruff control, hair conditioning, and growth. Includes Dandruff Shampoo, Sembaruthi Shampoo, and Black Cumin Oil.",
    ingredients: ["Anti-dandruff herbs", "Sembaruthi", "Black cumin"],
    tags: ["combo", "complete care", "dandruff control"]
  },
  {
    id: "sembaruthi-shampoo-black-cumin-oil-combo",
    slug: "sembaruthi-shampoo-black-cumin-oil-combo",
    name: "Sembaruthi Shampoo & Black Cumin Oil Combo",
    category: "combo-packs",
    size: "100ml",
    price: 1999,
    variants: [
      { label: "100ml", price: 1999 }
    ],
    imageUrl: "/Business and Product photos/Sembaruthi shampoo and Black cumin Hair Oil.jpg",
    shortDescription: "Perfect duo for healthy hair",
    description: "This combo includes our popular Sembaruthi Shampoo for conditioning and Black Cumin Hair Oil for growth.",
    ingredients: ["Sembaruthi", "Black cumin", "Natural oils"],
    tags: ["combo", "hair care", "growth"]
  },
  {
    id: "small-onion-shampoo",
    slug: "small-onion-shampoo",
    name: "Small Onion Shampoo",
    category: "combo-packs",
    size: "100ml",
    price: 1599,
    variants: [
      { label: "100ml", price: 1599 }
    ],
    imageUrl: "/Business and Product photos/Small onion Shampoo.jpg",
    shortDescription: "Onion shampoo for hair fall control",
    description: "Small Onion Shampoo is rich in sulfur which helps reduce hair fall and promotes collagen production for healthy hair.",
    ingredients: ["Small onion extract", "Hibiscus", "Aloe vera"],
    tags: ["shampoo", "hair fall", "onion"]
  }
]
