import { CafeInfo, MenuItem, ReviewItem, GalleryItem, FeatureItem } from '../types';

import heroImg from '../assets/images/ace_cafe_hero_1787746065408.jpg';
import chickenImg from '../assets/images/crispy_chicken_1787746080722.jpg';
import burgerImg from '../assets/images/burger_mayo_fries_1787746095234.jpg';
import friesImg from '../assets/images/cheese_fries_dish_1787746111274.jpg';
import vibeImg from '../assets/images/cafe_evening_vibe_1787746130235.jpg';

export const CAFE_INFO: CafeInfo = {
  name: 'The ACE Cafe',
  tagline: 'Good Food. Great Coffee. Better Moments.',
  subHeadline: 'Your cozy corner in New Panvel for coffee, conversations, comfort food and unforgettable evenings.',
  location: 'New Panvel East, Panvel, Maharashtra',
  shortAddress: "Near Pillai's College, New Panvel",
  fullAddress: "Near Pillai's College, behind Swad Hotel, Triveni Society, Sector 16, New Panvel East, Panvel, Maharashtra 410206",
  landmark: "Behind Swad Hotel, Near Pillai's College",
  phone: '+91 77380 00479',
  phoneRaw: '07738000479',
  closingTime: '11:00 PM',
  openingTime: '11:00 AM',
  rating: 4.5,
  reviewCount: 84,
  avgSpend: '₹200–₹400',
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+ACE+Cafe+Near+Pillai+College+Triveni+Society+Sector+16+New+Panvel+East+Maharashtra+410206",
  instagramUrl: "https://www.instagram.com",
  coordinates: {
    lat: 18.9902,
    lng: 73.1277,
  }
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    iconName: 'Coffee',
    title: 'Freshly Made',
    subtitle: 'Crafted with passion',
    description: 'Fresh coffee, snacks, handcrafted burgers and steaming comfort food made to order every single time.'
  },
  {
    id: 'feat-2',
    iconName: 'UtensilsCrossed',
    title: 'Something for Everyone',
    subtitle: 'Diverse craving menu',
    description: 'Crispy burgers, loaded cheesy fries, wok-tossed noodles, seasoned chicken dishes, and rich paneer favourites.'
  },
  {
    id: 'feat-3',
    iconName: 'Sparkles',
    title: 'Good Vibes',
    subtitle: 'Warm & welcoming',
    description: 'A relaxed, youthful atmosphere with warm lighting, cozy seating, and ambient beats made for conversations.'
  },
  {
    id: 'feat-4',
    iconName: 'MapPin',
    title: 'Easy to Find',
    subtitle: 'Student & hangout hub',
    description: "Conveniently located near Pillai's College in New Panvel East, right behind Swad Hotel in Triveni Society."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    name: 'Chicken Crispy',
    description: 'Crispy, deeply flavourful shredded chicken tossed with garlic, oriental sauces, spring onions and toasted sesame. Perfect for sharing.',
    category: 'Chicken',
    dietary: 'non-veg',
    price: '₹220',
    rating: 4.9,
    tag: 'Best Seller',
    image: chickenImg,
    ingredients: ['Tender Chicken', 'Chef Spice Blend', 'Ginger-Garlic Glaze', 'Spring Onion', 'Sesame Seeds'],
    spiceLevel: 'Medium',
    servingSize: 'Serves 2',
    pairingSuggestion: 'Pairs best with Iced Hazelnut Cold Coffee or Chilli Garlic Noodles'
  },
  {
    id: 'menu-2',
    name: 'Aloo Tikki Burger with Mayo Fries',
    description: 'Crisp golden spiced potato patty nestled in a toasted buttered bun with crunch lettuce, tomato, house mayo, served alongside seasoned fries.',
    category: 'Burgers',
    dietary: 'veg',
    price: '₹149',
    rating: 4.7,
    tag: 'Student Favorite',
    image: burgerImg,
    ingredients: ['Crispy Aloo Tikki', 'Fresh Brioche Bun', 'Herb Mayo', 'Crunchy Lettuce', 'Crinkle Cut Fries'],
    spiceLevel: 'Mild',
    servingSize: 'Single with sides',
    pairingSuggestion: 'Pairs great with Dark Chocolate Cold Coffee'
  },
  {
    id: 'menu-3',
    name: 'Cheese Fries',
    description: 'Golden crunchy fries heavily loaded with warm melted cheddar cheese sauce, secret herb seasoning, and diced jalapeños for ultimate comfort.',
    category: 'Fries',
    dietary: 'veg',
    price: '₹139',
    rating: 4.8,
    tag: 'Popular',
    image: friesImg,
    ingredients: ['Crispy Potato Fries', 'Warm Cheese Sauce', 'Smoked Paprika', 'Fresh Herbs', 'Jalapeños'],
    spiceLevel: 'Mild',
    servingSize: 'Serves 1-2',
    pairingSuggestion: 'Perfect finger food while catching up over coffee'
  },
  {
    id: 'menu-4',
    name: 'Schezwan Wok Noodles',
    description: 'Hot, flavourful wok-tossed noodles packed with crisp julienned vegetables, house schezwan paste, and a satisfying smoky aroma.',
    category: 'Chinese',
    dietary: 'veg',
    price: '₹169',
    rating: 4.6,
    tag: 'Must Try',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Wok Noodles', 'Bell Peppers', 'Shredded Cabbage', 'House Schezwan Sauce', 'Toasted Garlic'],
    spiceLevel: 'Spicy',
    servingSize: 'Generous Single / Shareable',
    pairingSuggestion: 'Pair with Chicken Crispy or Paneer Pockets'
  },
  {
    id: 'menu-5',
    name: 'Paneer Cheese Pockets',
    description: 'Golden crispy pastry pockets filled with spiced marinated paneer cubes and molten mozzarella cheese, served with zesty dip.',
    category: 'Vegetarian',
    dietary: 'veg',
    price: '₹179',
    rating: 4.8,
    tag: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cottage Cheese (Paneer)', 'Mozzarella', 'Secret Spices', 'Crispy Filo Crust', 'Mint Garlic Dip'],
    spiceLevel: 'Medium',
    servingSize: '6 Pcs',
    pairingSuggestion: 'Pairs wonderfully with Kulhad Masala Chai or Cold Coffee'
  },
  {
    id: 'menu-6',
    name: 'White Chicken Pepper',
    description: 'Signature ACE special! Tender pan-seared chicken tossed in a silky, rich white pepper cream reduction with crushed black pepper.',
    category: 'Chicken',
    dietary: 'non-veg',
    price: '₹249',
    rating: 5.0,
    tag: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Succulent Chicken Breast', 'White Pepper Cream', 'Fresh Garlic', 'Cracked Black Pepper', 'Butter Glaze'],
    spiceLevel: 'Medium',
    servingSize: 'Serves 2',
    pairingSuggestion: 'Highly recommended by regulars - try with garlic toast'
  },
  {
    id: 'menu-7',
    name: 'ACE Special Hazelnut Cold Coffee',
    description: 'Velvety espresso blended with creamy milk, premium roasted hazelnut syrup, topped with rich espresso drizzle and cocoa dusting.',
    category: 'Beverages',
    dietary: 'veg',
    price: '₹129',
    rating: 4.9,
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Fresh Espresso', 'Creamy Milk', 'Hazelnut Purée', 'Vanilla Gelato Base', 'Cocoa Dust'],
    spiceLevel: 'Mild',
    servingSize: '350ml Tall Glass',
    pairingSuggestion: 'The classic ACE drink to pair with spicy burgers and starters'
  },
  {
    id: 'menu-8',
    name: 'Crispy Chicken Zinger Burger',
    description: 'Extra-crunchy seasoned chicken fillet layered with spicy cocktail dressing, cheddar cheese slice, fresh lettuce, and gherkins in a brioche bun.',
    category: 'Burgers',
    dietary: 'non-veg',
    price: '₹189',
    rating: 4.8,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Hand-breaded Fried Chicken', 'Cheddar Slice', 'Pickled Gherkins', 'Spicy Burger Sauce', 'Sesame Bun'],
    spiceLevel: 'Medium',
    servingSize: 'Single Burger + Dip',
    pairingSuggestion: 'Order with Peri Peri Fries'
  },
  {
    id: 'menu-9',
    name: 'Peri Peri Seasoned Fries',
    description: 'Crispy thick-cut fries shaken with spicy South African Peri Peri herb mix and served with garlic mayo dip.',
    category: 'Fries',
    dietary: 'veg',
    price: '₹119',
    rating: 4.6,
    tag: 'Student Favorite',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Farm Potatoes', 'ACE Peri Peri Dust', 'Garlic Mayo', 'Sea Salt'],
    spiceLevel: 'Spicy',
    servingSize: 'Full Bowl',
    pairingSuggestion: 'Great snack during study breaks and conversations'
  },
  {
    id: 'menu-10',
    name: 'Loaded Cheesy Nachos',
    description: 'Crispy Mexican corn tortilla chips smothered in melted queso, spicy salsa, jalapeños, olives, and a dollop of sour cream.',
    category: 'Starters',
    dietary: 'veg',
    price: '₹169',
    rating: 4.7,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Corn Tortillas', 'Liquid Cheddar', 'Fresh Tomato Salsa', 'Sliced Jalapeños', 'Sour Cream'],
    spiceLevel: 'Mild',
    servingSize: 'Serves 2-3',
    pairingSuggestion: 'Best evening sharing snack with mocktails or iced tea'
  },
  {
    id: 'menu-11',
    name: 'Chicken Hakka Noodles',
    description: 'Traditional wok tossed noodles with shredded chicken strips, egg ribbon, crunchy green beans, cabbage, and soy garlic aromatics.',
    category: 'Chinese',
    dietary: 'non-veg',
    price: '₹199',
    rating: 4.7,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Egg Noodles', 'Shredded Chicken', 'Farm Greens', 'Dark Soya', 'Spring Onions'],
    spiceLevel: 'Mild',
    servingSize: 'Large Bowl',
    pairingSuggestion: 'Combines perfectly with Chicken Crispy'
  },
  {
    id: 'menu-12',
    name: 'Caramel Brownie Thick Shake',
    description: 'Decadent shake blended with Belgian chocolate brownie chunks, salted caramel swirl, and topped with chocolate curls.',
    category: 'Beverages',
    dietary: 'veg',
    price: '₹159',
    rating: 4.9,
    tag: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Fudge Brownie', 'Dairy Milk Cream', 'Salted Caramel', 'Chocolate Gelato'],
    spiceLevel: 'Mild',
    servingSize: '350ml Mason Jar',
    pairingSuggestion: 'The ultimate sweet finish to any meal'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Omkar Padwal',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best food in the town and service is too good. Chicken Crispy and burgers are absolute perfection. Perfect hangout spot near Pillai!',
    avatarText: 'OP',
    favoriteDish: 'Chicken Crispy & Cold Coffee',
    visitType: 'Friends Hangout'
  },
  {
    id: 'rev-2',
    author: 'Pushkar Handedeshmukh',
    rating: 5,
    date: '1 month ago',
    text: 'The food was amazing 😋 The place is so cool. Staff is very friendly ☺️ The cozy vibe in the evening makes it the best cafe in New Panvel.',
    avatarText: 'PH',
    favoriteDish: 'Cheese Fries & Aloo Tikki Burger',
    visitType: 'Evening Dine-In'
  },
  {
    id: 'rev-3',
    author: 'Sayali More',
    rating: 5,
    date: '2 months ago',
    text: 'Best Cafe. Must try white chicken pepper 🤤 The taste is unmatched anywhere in Panvel. Really great ambience and reasonable pricing.',
    avatarText: 'SM',
    favoriteDish: 'White Chicken Pepper',
    visitType: 'Dinner with Group'
  },
  {
    id: 'rev-4',
    author: 'Nikhil Patil',
    rating: 4.5,
    date: '2 months ago',
    text: 'Awesome place for college students. Located just behind Swad Hotel, easy to reach and the prices are super budget-friendly (around ₹250 per person). Loved the cold coffee and fries!',
    avatarText: 'NP',
    favoriteDish: 'Hazelnut Cold Coffee',
    visitType: 'College Hangout'
  },
  {
    id: 'rev-5',
    author: 'Ananya Deshmukh',
    rating: 5,
    date: '3 months ago',
    text: 'Paneer cheese pockets and Schezwan noodles are so comforting! The cafe lighting and music playlist create such a peaceful evening vibe.',
    avatarText: 'AD',
    favoriteDish: 'Paneer Cheese Pockets',
    visitType: 'Casual Date'
  },
  {
    id: 'rev-6',
    author: 'Rohan Kulkarni',
    rating: 4.5,
    date: '3 months ago',
    text: 'The ACE Cafe has quickly become our regular weekend chill spot. Quick service, polite staff, open till 11 PM which is super convenient.',
    avatarText: 'RK',
    favoriteDish: 'Zinger Burger & Loaded Nachos',
    visitType: 'Late Evening Bites'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Warm ACE Interior',
    category: 'Ambience',
    image: heroImg,
    aspect: 'landscape',
    caption: 'Cozy warm lighting and stylish wooden seating designed for comfort and relaxed evenings.'
  },
  {
    id: 'gal-2',
    title: 'Freshly Tossed Chicken Crispy',
    category: 'Food',
    image: chickenImg,
    aspect: 'portrait',
    caption: 'Our signature sizzler starter packed with crunch, garlic aromatics and oriental glaze.'
  },
  {
    id: 'gal-3',
    title: 'Handcrafted Aloo Burger & Mayo Fries',
    category: 'Food',
    image: burgerImg,
    aspect: 'square',
    caption: 'Golden spiced patty layered with fresh crisp greens and a mountain of seasoned fries.'
  },
  {
    id: 'gal-4',
    title: 'Evening Café Hangout Moments',
    category: 'Vibes',
    image: vibeImg,
    aspect: 'landscape',
    caption: 'Youthful energy, endless conversations, and good food near Pillai’s College.'
  },
  {
    id: 'gal-5',
    title: 'Melty Cheesy Loaded Fries',
    category: 'Food',
    image: friesImg,
    aspect: 'square',
    caption: 'Thick cut fries drenched in warm cheddar and secret spice herbs.'
  },
  {
    id: 'gal-6',
    title: 'Artisan Espresso & Cold Brews',
    category: 'Coffee & Drinks',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    caption: 'Freshly extracted coffee beans brewed to energize your afternoons.'
  },
  {
    id: 'gal-7',
    title: 'Cozy Corner Booths',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    caption: 'Spacious booths for studying, group catch-ups, and birthday celebrations.'
  },
  {
    id: 'gal-8',
    title: 'Rich Chocolate Shakes & Frappes',
    category: 'Coffee & Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    caption: 'Indulgent thick shakes blended with real fudge and topped with caramel.'
  }
];

export const CAFE_STATS = [
  { value: '4.5 ★', label: 'Google Rating', detail: 'Based on 84+ verified reviews' },
  { value: '84+', label: 'Happy Reviews', detail: 'Loved by Panvel crowd' },
  { value: '₹200–₹400', label: 'Average Spend', detail: 'Per person pocket-friendly' },
  { value: '11:00 PM', label: 'Open Daily Until', detail: '11:00 AM to 11:00 PM' },
];
