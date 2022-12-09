export interface Iprops {
  hello: string;
}
export interface Cordinates {
  latitude: number;
  longitude: number;
}
export interface AveragingPeriod {
  unit: string;
  value: number;
}
export interface Measurements {
  averagingPeriod: [AveragingPeriod];
  lastUpdated: Date;
  parameter: string;
  sourceName: string;
  unit: string;
  value: number;
}

export interface AirQualityResponse {
  city: string;
  coordinates: [Cordinates];
  country: string;
  location: string;
  measurements: [Measurements];
}
