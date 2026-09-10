export interface BusinessInfo {
  name: string;
  enterprise: string;
  type: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  hours: string;
  priceIndicator: string;
  googleMapsUrl: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TiffinPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  pricePlaceholder: string;
  priceSubtext: string;
  mealsIncluded: string;
  timing: string;
  preference: string;
  delivery: string;
  duration: string;
  customisation: string;
  orderingInfo: string;
  features: string[];
  popular?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'sides' | 'extras';
  description: string;
  isPlaceholder: boolean;
  type: 'veg' | 'non-veg' | 'flexible';
  dietaryNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'tiffin' | 'kitchen' | 'packaging' | 'service';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  plan: string;
  mealPreference: string;
  startDate: string;
  message: string;
}
