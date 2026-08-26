export type DietaryType = 'veg' | 'non-veg';

export type MenuCategory = 
  | 'All' 
  | 'Burgers' 
  | 'Starters' 
  | 'Fries' 
  | 'Chinese' 
  | 'Chicken' 
  | 'Vegetarian' 
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  dietary: DietaryType;
  price: string;
  rating?: number;
  tag?: 'Best Seller' | "Chef's Special" | 'Student Favorite' | 'Must Try' | 'Popular';
  image: string;
  ingredients?: string[];
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
  servingSize?: string;
  pairingSuggestion?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatarText: string;
  favoriteDish?: string;
  visitType?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Food' | 'Coffee & Drinks' | 'Vibes';
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  caption: string;
}

export interface FeatureItem {
  id: string;
  iconName: 'Coffee' | 'UtensilsCrossed' | 'Sparkles' | 'MapPin';
  title: string;
  subtitle: string;
  description: string;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  subHeadline: string;
  location: string;
  shortAddress: string;
  fullAddress: string;
  landmark: string;
  phone: string;
  phoneRaw: string;
  closingTime: string;
  openingTime: string;
  rating: number;
  reviewCount: number;
  avgSpend: string;
  googleMapsUrl: string;
  instagramUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
