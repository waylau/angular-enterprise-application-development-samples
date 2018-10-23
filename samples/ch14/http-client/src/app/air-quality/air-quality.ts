export interface AirQuality {
    status: string;
    data: Aqi;
}


export interface Aqi {
    aqi: number;
    time: any;
}