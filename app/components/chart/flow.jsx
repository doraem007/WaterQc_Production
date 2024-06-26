import GaugeComponent from 'react-gauge-component'

function roundToDecimal(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export default function Flow({ current }) {
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
                                limit: 2,
                                color: '#FF6347',
                            },
                            {
                                limit: 4,
                                color: '#FFF000',
                            },

                            {
                                color: '#5dc12e',

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
                            { value: 2 },
                            { value: 4 },
                            { value: 8 },
                            { value: 12 },
                            { value: 15 },
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
                maxValue={20}
            />
        </div>
    );
}