const favouriteCities: string[] = [];

export interface Weather {
  weather: [
    {
      main: string;
    }
  ];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  name: string;
}

export {
  favouriteCities
}