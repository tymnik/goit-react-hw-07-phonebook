export const formatDate = (date, manual = true) => {
  try {
    const currentDate = date ? new Date(date) : new Date();

    if (manual) {
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else {
      return currentDate.toLocaleDateString('en-GB');
    }
  } catch (error) {
    return 'Date not available';
  }
};
