export const formatDate = date => {
    if(!date){
        return null;
    }

    const newDate = new Date(date);
    const day = newDate.toLocaleString('default', { day: 'numeric' });
    const month = newDate.toLocaleString('default', { month: 'short' });
    const year = newDate.toLocaleString('default', { month: 'numeric' });
    
    return `${month}. ${day}, ${year}`;
};