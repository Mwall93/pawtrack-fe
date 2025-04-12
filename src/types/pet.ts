export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  image?: string;
  description?: string; 
}

export interface Weight {
    date: string;
    weight: number;
  }