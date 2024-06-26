export function formatTime(time) {
    const utcDate = new Date(time);
    const options = {
        timeZone: 'Asia/Bangkok',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const localDate = new Intl.DateTimeFormat('th-TH', options).formatToParts(utcDate);

    const dateParts = {};
    localDate.forEach(part => {
        dateParts[part.type] = part.value;
    });

    const formattedTime = `${dateParts.hour}:${dateParts.minute}:${dateParts.second} ${dateParts.day}/${dateParts.month}/${dateParts.year}`;

    return formattedTime;
}