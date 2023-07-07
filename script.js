const notificationList = document.getElementById("notificationsList");


const notifications = [
    {
        imageSrc: 'assets/avatar-mark-webber.webp',
        userName: 'Mark Webber',
        action: 'REACTION',
        post: 'My first tournament today!',
        status: 'NEW',
        group: null,
        time: '1m ago'
    },
    {
        imageSrc: 'assets/avatar-angela-gray.webp',
        userName: 'Angela Gray',
        action: 'FOLLOW',
        post: null,
        status: 'NEW',
        group: null,
        time: '5m ago'
    },
    {
        imageSrc: 'assets/avatar-jacob-thompson.webp',
        userName: 'Jacob Thompson',
        action: 'JOIN',
        post: null,
        status: 'NEW',
        group: 'Chess Club',
        time: '1 day ago'
    },
]

notifications.forEach(function(notification) {
    const listItem = document.createElement('li');
    listItem.classList.add('notification');

    const image = document.createElement('img');
    image.src = notification.imageSrc;

    const message = document.createElement('p')

    if(notification.action === 'REACTION') {
        message.textContent = `${notification.userName} reacted to your recent post ${notification.post}`
    } else message.textContent = notification.userName

    if(notification.status === 'NEW') {
        listItem.classList.add('notification_new');
    }


    listItem.appendChild(image);
    listItem.appendChild(message);

    notificationList.appendChild(listItem);
});