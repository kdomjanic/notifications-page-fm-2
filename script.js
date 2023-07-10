const notificationList = document.getElementById("notificationsList");


const notifications = [
    {
        imageSrc: 'assets/avatar-mark-webber.webp',
        userName: 'Mark Webber',
        action: 'REACT_TO_POST',
        post: 'My first tournament today!',
        status: 'NEW',
        group: null,
        time: '1m ago',
        message: null,
        commentedPicture: null,
    },
    {
        imageSrc: 'assets/avatar-angela-gray.webp',
        userName: 'Angela Gray',
        action: 'FOLLOW',
        post: null,
        status: 'NEW',
        group: null,
        time: '5m ago',
        message: null,
        commentedPicture: null
    },
    {
        imageSrc: 'assets/avatar-jacob-thompson.webp',
        userName: 'Jacob Thompson',
        action: 'JOIN_GROUP',
        post: null,
        status: 'NEW',
        group: 'Chess Club',
        time: '1 day ago',
        message: null,
        commentedPicture: null
    },
    {
        imageSrc: 'assets/avatar-rizky-hasanuddin.webp',
        userName: 'Rizky Hasanuddin',
        action: 'PRIVATE_MESSAGE',
        post: null,
        status: null,
        group: null,
        time: '5 days ago',
        message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now, and I'm already having lots of fun and improving my game.`,
        commentedPicture: null
    },
    {
        imageSrc: 'assets/avatar-kimberly-smith.webp',
        userName: 'Kimberly Smith',
        action: 'COMMENT_ON_PICTURE',
        post: null,
        status: null,
        group: null,
        time: '1 week ago',
        message: null,
        commentedPicture: 'assets/image-chess.webp'
    },
    {
        imageSrc: 'assets/avatar-nathan-peterson.webp',
        userName: 'Nathan Peterson',
        action: 'REACT_TO_POST',
        post: '5 end-game strategies to increase your win rate',
        status: null,
        group: null,
        time: '2 week ago',
        message: null,
        commentedPicture: null,
    },
    {
        imageSrc: 'assets/avatar-anna-kim.webp',
        userName: 'Anna Kim',
        action: 'LEFT_GROUP',
        post: null,
        status: null,
        group: 'Chess Club',
        time: '2 week ago',
        message: null,
        commentedPicture: null,
    },
]

notifications.forEach(function(notification) {
    const listItem = document.createElement('li');
    listItem.classList.add('notification');

    // IMAGE
    const userImage = document.createElement('img');
    userImage.src = notification.imageSrc;

    // MESSAGE
    const message = document.createElement('p')

    // NAME
    const userNameText = document.createElement('span');
    userNameText.textContent = notification.userName;
    userNameText.style.fontWeight = "bold"

    // REACTION TO POST
    if(notification.action === 'REACT_TO_POST') {
        const restText = document.createElement("span");
        restText.textContent = ` reacted to your recent post `;
        const postText = document.createElement('span');
        postText.textContent = notification.post;
        postText.style.color = 'hsl(219, 12%, 42%)'
        postText.style.fontWeight = "bold"
        const notificationTime = document.createElement('span');
        notificationTime.textContent = `${notification.time}`;
        notificationTime.style.color = 'hsl(219, 14%, 63%)';
        message.appendChild(userNameText);
        message.appendChild(restText);
        message.appendChild(postText);
        if(notification.status === 'NEW') {
            const notificationStatus = document.createElement('span');
            notificationStatus.classList.add('new-dot');
            message.appendChild(notificationStatus)
        }
        message.appendChild(document.createElement('br'));
        message.appendChild(notificationTime)
    }

    // FOLLOW
    if(notification.action === 'FOLLOW') {
        const restText = document.createElement("span");
        restText.textContent = ` followed you`;
        const notificationTime = document.createElement('span');
        notificationTime.textContent = `${notification.time}`;
        notificationTime.style.color = 'hsl(219, 14%, 63%)';

        message.appendChild(userNameText);
        message.appendChild(restText);
        if(notification.status === 'NEW') {
            const notificationStatus = document.createElement('span');
            notificationStatus.classList.add('new-dot');
            message.appendChild(notificationStatus)
        }
        message.appendChild(document.createElement('br'));
        message.appendChild(notificationTime)
    }

    // GROUP JOIN OR LEFT
    if((notification.action === 'JOIN_GROUP') || (notification.action === 'LEFT_GROUP')) {
        const restText = document.createElement("span");
        restText.textContent = (notification.action === 'JOIN_GROUP') ? ' has joined your group ' : ' has left the group ';
        const groupText = document.createElement('span');
        groupText.textContent = notification.group;
        groupText.style.color = 'hsl(219, 85%, 26%)'
        groupText.style.fontWeight = "bold"
        const notificationTime = document.createElement('span');
        notificationTime.textContent = `${notification.time}`;
        notificationTime.style.color = 'hsl(219, 14%, 63%)';
        message.appendChild(userNameText);
        message.appendChild(restText);
        message.appendChild(groupText);
        if(notification.status === 'NEW') {
            const notificationStatus = document.createElement('span');
            notificationStatus.classList.add('new-dot');
            message.appendChild(notificationStatus)
        }
        message.appendChild(document.createElement('br'));
        message.appendChild(notificationTime)
    }

    // PRIVATE MESSAGE
    if(notification.action === 'PRIVATE_MESSAGE') {
        const restText = document.createElement("span");
        restText.textContent = ` sent you a private message `;
        const notificationTime = document.createElement('span');
        notificationTime.textContent = `${notification.time}`;
        notificationTime.style.color = 'hsl(219, 14%, 63%)';
        message.appendChild(userNameText);
        message.appendChild(restText);
        if(notification.status === 'NEW') {
            const notificationStatus = document.createElement('span');
            notificationStatus.classList.add('new-dot');
            message.appendChild(notificationStatus)
        }
        message.appendChild(document.createElement('br'));
        message.appendChild(notificationTime)
        const privateMessage = document.createElement("p");
        privateMessage.textContent = `${notification.message}`;
        privateMessage.classList.add('private_message');
        message.appendChild(privateMessage)
    }

    // COMMENT ON PICTURE
    if(notification.action === 'COMMENT_ON_PICTURE') {
        const restText = document.createElement("span");
        restText.textContent = ` commented on your picutre`;
        const notificationTime = document.createElement('span');
        notificationTime.textContent = `${notification.time}`;
        notificationTime.style.color = 'hsl(219, 14%, 63%)';
        message.appendChild(userNameText);
        message.appendChild(restText);
        if(notification.status === 'NEW') {
            const notificationStatus = document.createElement('span');
            notificationStatus.classList.add('new-dot');
            message.appendChild(notificationStatus)
        }
        message.appendChild(document.createElement('br'));
        message.appendChild(notificationTime);


    }


    // IS NEW BACKGROUND
    if(notification.status === 'NEW') {
        listItem.classList.add('notification_new');
    }


    listItem.appendChild(userImage);
    listItem.appendChild(message);
    if(notification.commentedPicture !== null) {
        const commentedImage = document.createElement('img');
        commentedImage.src = notification.commentedPicture;
        commentedImage.classList.add('commented_picture')
        listItem.appendChild(commentedImage);

    }
    notificationList.appendChild(listItem);
});