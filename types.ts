
export enum EquipmentType {
  VAN = 'Dry Van',
  REEFER = 'Reefer',
  FLATBED = 'Flatbed',
  POWER_ONLY = 'Power Only'
}

export enum LoadStatus {
  OPEN = 'Open',
  BOOKED = 'Booked',
  DELIVERED = 'Delivered'
}

export interface Location {
  city: string;
  state: string;
}

export interface Load {
  id: string;
  origin: Location;
  destination: Location;
  pickupDate: string;
  equipment: EquipmentType;
  weight: number;
  distance: number;
  price: number;
  ratePerMile: number;
  commodity: string;
  status: LoadStatus;
  company: string;
  postedTime: string;
  // Premium fields
  deadhead?: number;
  creditScore?: number;
  factoring?: boolean;
  daysToPay?: number;
  brokerPhone?: string;
  specialInstructions?: string;
}

export interface TruckPost {
  id: string;
  origin: string;
  destination: string; // 'Anywhere' if empty or specific string
  isAnywhere: boolean;
  equipment: EquipmentType;
  availableDate: string;
  comments?: string;
  autoRefresh: boolean;
  status: 'Active' | 'Expired';
  postedAt: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  companyName: string;
}

export interface FilterState {
  origin: string;
  destination: string;
  equipment: string;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
  plan: string;
}
