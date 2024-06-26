import GaugeComponent from 'react-gauge-component'

function roundToDecimal(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export default function Temp({ current }) {
    const roundedCurrent = roundToDecimal(current, 2);

    return (
        <div className='max-w-[300px]'>
            <GaugeComponent
                type="radial"
                pointer={{ type: "needle", animationDelay: 0 }}
                arc={{
                    width: 0.2,
                    padding: 0.005,
                    subArcs:
                        [


                            {
                                limit: 15,
                                color: '#FF6347',
                            },
                            {
                                limit: 20,
                                color: '#FFF000',
                            },
                            {
                                limit: 40,
                                color: '#5dc12e',
                            },
                            {
                                limit: 45,
                                color: '#FFF000',
                            },

                            {
                                color: '#FF6347',

                            }
                        ]
                }}
                labels={{
                    valueLabel: {
                        style: {
                            fill: '#000000',
                            fontSize: '32px'
                        }
                    },
                    tickLabels: {
                        type: "inner",
                        ticks: [
                            { value: 15 },
                            { value: 20 },
                            { value: 30 },
                            { value: 40 },
                            { value: 45 },
                        ],
                        valueConfig: {
                            style: {
                                fill: '#000000',

                            }
                        },
                        lineConfig: {
                            color: '#000000',
                            width: 1
                        }
                    }

                }}
                value={roundedCurrent}
                minValue={0}
                maxValue={60}
            />
        </div>
    );
}