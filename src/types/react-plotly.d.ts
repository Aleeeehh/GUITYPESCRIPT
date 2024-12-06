declare module 'react-plotly.js' {
    import { Component } from 'react';
    
    interface PlotParams {
        data: Array<{
            x?: any[];
            y?: any[];
            type?: string;
            mode?: string;
            marker?: {
                color?: string;
            };
            [key: string]: any;
        }>;
        layout?: {
            width?: number;
            height?: number;
            title?: string;
            xaxis?: any;
            yaxis?: any;
            margin?: {
                l?: number;
                r?: number;
                t?: number;
                b?: number;
            };
            paper_bgcolor?: string;
            plot_bgcolor?: string;
            [key: string]: any;
        };
        [key: string]: any;
    }

    export default class Plot extends Component<PlotParams> {}
}