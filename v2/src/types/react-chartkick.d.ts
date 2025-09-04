declare module 'react-chartkick' {
  import * as React from 'react';
  
  export interface ChartComponentProps {
    data: Array<Array<string | number> | object>;
    width?: string | number;
    height?: string | number;
    [key: string]: any;
  }
  
  export class Chart extends React.Component<ChartComponentProps> {}
  
  export const LineChart: React.FC<ChartComponentProps>;
  export const PieChart: React.FC<ChartComponentProps>;
  export const ColumnChart: React.FC<ChartComponentProps>;
  export const BarChart: React.FC<ChartComponentProps>;
  export const AreaChart: React.FC<ChartComponentProps>;
  export const GeoChart: React.FC<ChartComponentProps>;
  export const ScatterChart: React.FC<ChartComponentProps>;
  
  export const Chartkick: React.FC<{
    chartsLibrary?: string;
    adapter?: string;
    downloadPNG?: boolean;
    colors?: string[];
  }>;
}
