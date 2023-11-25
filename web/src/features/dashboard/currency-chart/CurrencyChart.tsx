import {useMemo} from "react";
import {AxisOptions, Chart} from "react-charts";
import {useChartMockConfig} from "@/shared/lib/hooks";

type DailyStars = {
    date: Date,
    stars: number,
}

type Series = {
    label: string,
    data: DailyStars[]
}

const data: Series[] = [
    {
        label: 'React Charts',
        data: [
            {
                date: new Date(),
                stars: 202123,
            }
            // ...
        ]
    },
    {
        label: 'React Query',
        data: [
            {
                date: new Date(),
                stars: 10234230,
            }
        ]
    }
]

const CurrencyChart = () => {
    const { data, randomizeData } = useChartMockConfig({
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