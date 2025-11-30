
import { EquipmentType, Load, LoadStatus, TruckPost, Invoice } from './types';

// Helper to generate random date within next 7 days
const getRandomDate = (daysToAdd: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toISOString().split('T')[0];
};

export const MOCK_LOADS: Load[] = [
  {
    id: 'L-10234',
    origin: { city: 'Dallas', state: 'TX' },
    destination: { city: 'Chicago', state: 'IL' },
    pickupDate: getRandomDate(1),
    equipment: EquipmentType.REEFER,
    weight: 42000,
    distance: 926,
    price: 2400,
    ratePerMile: 2.59,
    commodity: 'Frozen Food',
    status: LoadStatus.OPEN,
    company: 'Arctic Logistics',
    postedTime: '10 mins ago',
    deadhead: 12,
    creditScore: 98,
    factoring: true,
    daysToPay: 21,
    brokerPhone: '(555) 123-4567',
    specialInstructions: 'Driver must check in 30 mins prior to arrival. Pulp temperature must be -10F. 2 load bars required.'
  },
  {
    id: 'L-10235',
    origin: { city: 'Atlanta', state: 'GA' },
    destination: { city: 'Miami', state: 'FL' },
    pickupDate: getRandomDate(2),
    equipment: EquipmentType.VAN,
    weight: 35000,
    distance: 663,
    price: 1800,
    ratePerMile: 2.71,
    commodity: 'Consumer Electronics',
    status: LoadStatus.OPEN,
    company: 'Swift Move Inc.',
    postedTime: '22 mins ago',
    deadhead: 45,
    creditScore: 88,
    factoring: true,
    daysToPay: 30,
    brokerPhone: '(555) 987-6543',
    specialInstructions: 'High value load. Team drivers preferred but not required. Sealed trailer policy strictly enforced.'
  },
  {
    id: 'L-10236',
    origin: { city: 'Los Angeles', state: 'CA' },
    destination: { city: 'Phoenix', state: 'AZ' },
    pickupDate: getRandomDate(0),
    equipment: EquipmentType.FLATBED,
    weight: 46000,
    distance: 372,
    price: 1200,
    ratePerMile: 3.22,
    commodity: 'Building Materials',
    status: LoadStatus.BOOKED,
    company: 'BuildRight Transport',
    postedTime: '1 hour ago',
    deadhead: 5,
    creditScore: 95,
    factoring: false,
    daysToPay: 15,
    brokerPhone: '(555) 234-5678',
    specialInstructions: 'Tarping required (6ft drop). Crane unload at destination. PPE required on site.'
  },
  {
    id: 'L-10237',
    origin: { city: 'Seattle', state: 'WA' },
    destination: { city: 'Denver', state: 'CO' },
    pickupDate: getRandomDate(3),
    equipment: EquipmentType.REEFER,
    weight: 40000,
    distance: 1305,
    price: 3500,
    ratePerMile: 2.68,
    commodity: 'Produce',
    status: LoadStatus.OPEN,
    company: 'Fresh Express',
    postedTime: '5 mins ago',
    deadhead: 20,
    creditScore: 92,
    factoring: true,
    daysToPay: 25,
    brokerPhone: '(555) 345-6789',
    specialInstructions: 'Fresh produce. Continuous temperature monitoring required. Do not break seal until receiver verifies.'
  },
  {
    id: 'L-10238',
    origin: { city: 'Houston', state: 'TX' },
    destination: { city: 'Laredo', state: 'TX' },
    pickupDate: getRandomDate(1),
    equipment: EquipmentType.POWER_ONLY,
    weight: 0,
    distance: 310,
    price: 950,
    ratePerMile: 3.06,
    commodity: 'Trailer Relocation',
    status: LoadStatus.OPEN,
    company: 'Texan Haulers',
    postedTime: '45 mins ago',
    deadhead: 8,
    creditScore: 85,
    factoring: true,
    daysToPay: 45,
    brokerPhone: '(555) 456-7890',
    specialInstructions: 'Power only. Must have own plates and insurance. Trailer is empty.'
  },
  {
    id: 'L-10239',
    origin: { city: 'Chicago', state: 'IL' },
    destination: { city: 'Detroit', state: 'MI' },
    pickupDate: getRandomDate(2),
    equipment: EquipmentType.VAN,
    weight: 38000,
    distance: 283,
    price: 900,
    ratePerMile: 3.18,
    commodity: 'Auto Parts',
    status: LoadStatus.OPEN,
    company: 'Motor City Logistics',
    postedTime: '15 mins ago',
    deadhead: 15,
    creditScore: 99,
    factoring: true,
    daysToPay: 14,
    brokerPhone: '(555) 567-8901',
    specialInstructions: 'JIT Delivery. Strict appointment times. No detention paid for first 2 hours.'
  },
   {
    id: 'L-10240',
    origin: { city: 'New York', state: 'NY' },
    destination: { city: 'Boston', state: 'MA' },
    pickupDate: getRandomDate(4),
    equipment: EquipmentType.VAN,
    weight: 25000,
    distance: 215,
    price: 850,
    ratePerMile: 3.95,
    commodity: 'General Freight',
    status: LoadStatus.OPEN,
    company: 'Northeast Carriers',
    postedTime: '2 mins ago',
    deadhead: 50,
    creditScore: 90,
    factoring: false,
    daysToPay: 28,
    brokerPhone: '(555) 678-9012',
    specialInstructions: 'City delivery. 53ft trailer restriction in some areas, please check route. Liftgate preferred.'
  }
];

export const MOCK_MARKET_RATES = [
  { region: 'Midwest', type: 'Van', rate: 2.45, trend: 'up' },
  { region: 'West Coast', type: 'Reefer', rate: 3.12, trend: 'up' },
  { region: 'East Coast', type: 'Flatbed', rate: 2.85, trend: 'down' },
  { region: 'South', type: 'Van', rate: 2.15, trend: 'flat' },
  { region: 'National', type: 'Power Only', rate: 2.65, trend: 'up' },
];

export const PREMIUM_MATCHES: Load[] = [
  {
    id: 'L-99001',
    origin: { city: 'San Francisco', state: 'CA' },
    destination: { city: 'Austin', state: 'TX' },
    pickupDate: getRandomDate(1),
    equipment: EquipmentType.REEFER,
    weight: 32000,
    distance: 1750,
    price: 5200,
    ratePerMile: 2.97,
    commodity: 'Pharmaceuticals',
    status: LoadStatus.OPEN,
    company: 'Elite Pharma Logistics',
    postedTime: 'Just now',
    deadhead: 10,
    creditScore: 99,
    factoring: true,
    daysToPay: 10,
    brokerPhone: '(888) 555-0199',
    specialInstructions: 'Temp control critical.'
  },
  {
    id: 'L-99002',
    origin: { city: 'Boston', state: 'MA' },
    destination: { city: 'Philadelphia', state: 'PA' },
    pickupDate: getRandomDate(2),
    equipment: EquipmentType.VAN,
    weight: 15000,
    distance: 310,
    price: 1450,
    ratePerMile: 4.67,
    commodity: 'High Value Electronics',
    status: LoadStatus.OPEN,
    company: 'TechMove Solutions',
    postedTime: '5 mins ago',
    deadhead: 5,
    creditScore: 96,
    factoring: true,
    daysToPay: 21,
    brokerPhone: '(888) 555-0122',
    specialInstructions: 'Team drivers required.'
  },
  {
    id: 'L-99003',
    origin: { city: 'Miami', state: 'FL' },
    destination: { city: 'New York', state: 'NY' },
    pickupDate: getRandomDate(1),
    equipment: EquipmentType.REEFER,
    weight: 41000,
    distance: 1280,
    price: 4100,
    ratePerMile: 3.20,
    commodity: 'Floral Products',
    status: LoadStatus.OPEN,
    company: 'Fresh Flowers Intl',
    postedTime: '12 mins ago',
    deadhead: 15,
    creditScore: 94,
    factoring: true,
    daysToPay: 28,
    brokerPhone: '(888) 555-0144',
    specialInstructions: 'Fragile cargo.'
  }
];

export const MOCK_TRUCK_POSTS: TruckPost[] = [
  {
    id: 'TP-101',
    origin: 'Dallas, TX',
    destination: '',
    isAnywhere: true,
    equipment: EquipmentType.REEFER,
    availableDate: getRandomDate(0),
    autoRefresh: true,
    status: 'Active',
    postedAt: '15 mins ago'
  },
  {
    id: 'TP-102',
    origin: 'Chicago, IL',
    destination: 'Detroit, MI',
    isAnywhere: false,
    equipment: EquipmentType.VAN,
    availableDate: getRandomDate(-2),
    autoRefresh: false,
    status: 'Expired',
    postedAt: '2 days ago'
  }
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-2024-001', date: '2024-05-01', amount: 49.00, status: 'Paid', plan: 'Premium Plan' },
  { id: 'INV-2024-002', date: '2024-04-01', amount: 49.00, status: 'Paid', plan: 'Premium Plan' },
  { id: 'INV-2024-003', date: '2024-03-01', amount: 49.00, status: 'Paid', plan: 'Premium Plan' },
];

export const APP_NAME = "LoadLink";
