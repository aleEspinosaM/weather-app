import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { round, sum } from 'lodash/math';
;




const Chart = (props) => {
const average = (data) => round(sum(props.data) / props.data.length)

    return (
        <div>
            <Sparklines data={props.data} svgWidth={180} svgHeight={110}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
};

export default Chart;