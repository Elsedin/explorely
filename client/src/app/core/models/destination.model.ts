export type Region = 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';

export interface Destination {
  id: number;
  name: string;
  country: string;
  region: Region;
  categories: string[];
  description: string;
  imageUrl: string;
  rating: number;
}
