const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 8;
        break;
    }
  };

  const getActualSleepHours = () => {
    total = 0;
    total += getSleepHours('monday');
    total += getSleepHours('tuesday');
    total += getSleepHours('wednesday');
    total += getSleepHours('thursday');
    total += getSleepHours('friday');
    total += getSleepHours('saturday');
    total += getSleepHours('sunday');
    return total;
  };

  const getIdealSleepHours = ideal => { return ideal * 7 };

  function calculateSleepDebt() {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(8);
    // Implement logic
    if (actualSleepHours === idealSleepHours) {
      console.log(`You have achieved your target of ${idealSleepHours} hours sleep`);
    } else if (actualSleepHours < idealSleepHours) {
      under = idealSleepHours - actualSleepHours;
      console.log(`You have missed your target of ${idealSleepHours} hours sleep by ${under} hours.`);
    } else { // Assume over sleeping
      over = actualSleepHours - idealSleepHours;
      console.log(`You have overslept by ${over} hours. Missing your target of ${idealSleepHours}.`)
    }

  };

  calculateSleepDebt();
