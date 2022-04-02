function attachEventsListeners() {


    const button = document.querySelector('input[type=button]');
    button.addEventListener('click', (ev) => {

        const input = document.getElementById('inputDistance');
        const inputOption = document.getElementById('inputUnits');
        const inputSelected = inputOption.options[inputOption.selectedIndex].value;

        const outputOption = document.getElementById('outputUnits');
        const outputSelected = outputOption.options[outputOption.selectedIndex].value;

        result = distanceConverter(input.value, inputSelected, outputSelected);
        document.getElementById('outputDistance').value = result;

    });



    function distanceConverter(distance, input, output) {

        distance = Number(distance);

        const distanceObj = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254
        };


        return (distance * distanceObj[input]) / distanceObj[output];

    }
}