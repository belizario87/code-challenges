const distance = "2km";
const time = '500s';

function calculateSpeed(distance, time) {
    if (distance.includes("km") && time.includes('min')) {
        distance = distance.replace('km', ''); 
        time = time.replace('min', ''); 
    
        const distanceNumber = parseInt(distance);
        const timeNumber = parseInt(time) / 60; // Converter minutos para horas
        const calcAvg = distanceNumber / timeNumber; 
        const milesConvert = calcAvg * 0.621371; // Converter km/h para mph
        const roundNumber = Math.round(milesConvert);
        const stringNumero = roundNumber.toString();
        const stringFinal = `${stringNumero} mph`;
    
        return stringFinal;
    } else if (distance.includes('m') && time.includes('s')) {
        distance = distance.replace('m', ''); // Remover 'm'
        time = time.replace('s', ''); // Remover 's'
    
        const distanceNumber = parseInt(distance) / 1000; // Converter metros para quilômetros
        const timeNumber = parseInt(time) / 3600; // Converter segundos para horas
        const calcAvg = distanceNumber / timeNumber; 
        const milesConvert = calcAvg * 0.621371; 
        const roundNumber = Math.round(milesConvert);
        const stringNumero = roundNumber.toString();
        const stringFinal = `${stringNumero}mph`;
    
        return stringFinal;
    } else if (distance.includes('m') && time.includes('min')) {
        distance = distance.replace('m', ''); // Remover 'm'
        time = time.replace('min', ''); // Remover 's'
    
        const distanceNumber = parseInt(distance) / 1000; 
        const timeNumber = parseInt(time) / 60; // Converter segundos para minutos
        const calcAvg = distanceNumber / timeNumber; 
        const milesConvert = calcAvg * 0.621371; // Converter km/h para mph
        const roundNumber = Math.round(milesConvert);
        const stringNumero = roundNumber.toString();
        const stringFinal = `${stringNumero}mph`;
    
        return stringFinal;
        } else if (distance.includes('km') && time.includes('s')) {
        distance = distance.replace('km', ''); 
        time = time.replace('s', ''); 
        
        const distanceNumber = parseInt(distance);
        const timeNumber = parseInt(time) / 3600; // Convert seconds to hours
        const calcAvg = distanceNumber / timeNumber; 
        const milesConvert = calcAvg * 0.621371; // Convert km/h to mph
        const roundNumber = Math.round(milesConvert);
        const stringNumero = roundNumber.toString();
        const stringFinal = `${stringNumero} mph`;
        
        return stringFinal;
        }
}

console.log(calculateSpeed(distance, time));        
    
    
    
    
    


