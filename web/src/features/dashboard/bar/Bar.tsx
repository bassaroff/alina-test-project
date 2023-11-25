import {AxisOptions, Chart} from "react-charts";
import React from "react";
import useChartConfig from "@/shared/lib/hooks/useChartMockConfig";

const Bar = () => {
    const { data } = useChartConfig({
        series: 3,
        dataType: "ordinal",
    });

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => ({
            getValue: (datum) => datum.primary,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
    >(
        () => [
            {
                getValue: (datum) => datum.secondary,
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
            }}
        />
    );
}

export default Bar;