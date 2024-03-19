export function convertToAmPm (dateTimeString) {
    const parts = dateTimeString.split(' ');
    const timePart = parts[1];
    
    let [hours, minutes] = timePart.split(':').map(Number);
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    return `${hours}:${minutes} ${ampm}`;
  };

  export function removeLeadingZero(timeString) {
    if (timeString && timeString.startsWith('0')) {
      return timeString.slice(1);
    }
    return timeString;
  }
  
  