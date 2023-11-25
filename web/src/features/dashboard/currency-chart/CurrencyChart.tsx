import {useMemo} from "react";
import {AxisOptions, Chart} from "react-charts";
import {useChartMockConfig} from "@/shared/lib/hooks";

const CurrencyChart = () => {
    const { data } = useChartMockConfig({
        series: 10,
        dataType: "time",
    });

    const primaryAxis = useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => ({
            getValue: (datum) => datum.primary as unknown as Date,
        }),
        []
    );

    const secondaryAxes = useMemo<
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
    )
}

export default CurrencyChart;