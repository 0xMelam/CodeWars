var number = function(busStops){
    let totalPassengers = 0;
    
    for(i=0; i<busStops.length; i++){
      
      let passengerOn = busStops[i][0];
      let passengerOff = busStops[i][1];
      totalPassengers += passengerOn;
      totalPassengers -= passengerOff;
      
    }
    
    return totalPassengers;
  }