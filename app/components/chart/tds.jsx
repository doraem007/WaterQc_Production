import GaugeComponent from 'react-gauge-component'

function roundToDecimal(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export default function Tds({ current }) {
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
                                limit: 500,
                                color: '#5dc12e',
                            },
                            {
                                limit: 600,
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
                            { value: 200 },
                            { value: 400 },
                            { value: 500 },
                            { value: 600 },
                            { value: 800 },
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
                maxValue={800}
            />
        </div>
    );
}