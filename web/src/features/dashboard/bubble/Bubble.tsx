import {useChartMockConfig} from "@/shared/lib/hooks";
import React from "react";
import {AxisOptions, Chart} from "react-charts";

const Bubble = () => {
    const { data, randomizeData } = useChartMockConfig({
        series: 10,
        dataType: "linear",
        useR: true,
    });

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => ({
            getValue: (datum) => datum.primary as unknown as Date,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
    >(
        () => [
            {
                getValue: (datum) => datum.secondary,
                elementType: "bubble",
            },
        ],
        []
    );

    return (
        <Chart
            options={{
                data,
                primaryAxis,
                secondaryAxes,
                interactionMode: "closest",
                getDatumStyle: (datum) =>
                    ({
                        circle: { r: datum.originalDatum.radius },
                    } as any),
            }}
        />
    );
}

export default Bubble;