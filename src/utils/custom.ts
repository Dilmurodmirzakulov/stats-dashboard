export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-11
    const year = date.getFullYear().toString().slice(-2); // get the last two digits of the year
  
    return `${day}.${month}.${year}`;
  };