const notificationList = document.getElementById('notifications-list');
const notificationsNumber = document.getElementById('notifications-number')
const notifications = [
    {
        imageSrc: 'assets/avatar-mark-webber.webp',
        imageAltText: 'User image: Mark Webber',
        userName: 'Mark Webber',
        action: 'REACT_TO_POST',
        post: 'My first tournament today!',
        status: 'NEW',
        group: null,
        time: '2023-07-11T07:56:17.718Z',
        message: null,
        commentedPicture: null,
        commentedPictureAltText: null
    },
    {
        imageSrc: 'assets/avatar-angela-gray.webp',
        imageAltText: 'User image: Angela Gray',
        userName: 'Angela Gray',
        action: 'FOLLOW',
        post: null,
        status: 'NEW',
        group: null,
        time: '2023-07-11T05:50:17.718Z',
        message: null,
        commentedPicture: null,
        commentedPictureAltText: null
    },
    {
        imageSrc: 'assets/avatar-jacob-thompson.webp',
        imageAltText: 'User image: Jacob Thompson',
        userName: 'Jacob Thompson',
        action: 'JOIN_GROUP',
        post: null,
        status: 'NEW',
        group: 'Chess Club',
        time: '2023-07-10T11:56:17.718Z',
        message: null,
        commentedPicture: null,
        commentedPictureAltText: null
    },
    {
        imageSrc: 'assets/avatar-rizky-hasanuddin.webp',
        imageAltText: 'User image: Rizky Hasanuddin',
        userName: 'Rizky Hasanuddin',
        action: 'PRIVATE_MESSAGE',
        post: null,
        status: null,
        group: null,
        time: '2023-07-08T08:56:17.718Z',
        message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now, and I'm already having lots of fun and improving my game.`,
        commentedPicture: null,
        commentedPictureAltText: null
    },
    {
        imageSrc: 'assets/avatar-kimberly-smith.webp',
        imageAltText: 'User image: Kimberly Smith',
        userName: 'Kimberly Smith',
        action: 'COMMENT_ON_PICTURE',
        post: null,
        status: null,
        group: null,
        time: '2023-07-01T16:00:17.718Z',
        message: null,
        commentedPicture: 'assets/image-chess.webp',
        commentedPictureAltText: 'Chess player'
    },
    {
        imageSrc: 'assets/avatar-nathan-peterson.webp',
        imageAltText: 'User image: Nathan Peterson',
        userName: 'Nathan Peterson',
        action: 'REACT_TO_POST',
        post: '5 end-game strategies to increase your win rate',
        status: null,
        group: null,
        time: '2023-06-28T18:26:17.718Z',
        message: null,
        commentedPicture: null,
        commentedPictureAltText: null
    },
    {
        imageSrc: 'assets/avatar-anna-kim.webp',
        imageAltText: 'User image: Anna Kim',
        userName: 'Anna Kim',
        action: 'LEFT_GROUP',
        post: null,
        status: null,
        group: 'Chess Club',
        time: '2023-04-26T18:26:17.718Z',
        message: null,
        commentedPicture: null,
        commentedPictureAltText: null
    },
]

// INITIALIZATION
createNotificationsList()

function createNotificationsList() {
    notificationList.innerHTML = '';
    notificationsNumber.innerText = '0'
    let notificationsNumberCounter = 0;
    notifications.forEach(function(notification) {
        if(notification.status === 'NEW') {
            notificationsNumberCounter++
        }
        // CREATE LIST ITEM
        const listItem = document.createElement('article');
        listItem.classList.add('notification');
        // ADD USER IMAGE
        const userImage = document.createElement('img');
        userImage.src = notification.imageSrc;
        userImage.alt = notification.imageAltText
        // CREATE MESSAGE PARAGRAPH
        const message = document.createElement('p')
        // BUILD MESSAGE
        switch (notification.action) {
            case 'REACT_TO_POST':
                const userNameTextReact = defineUserNameSpan(notification.userName);
                message.appendChild(userNameTextReact);
                const actionTextReact = document.createElement("span");
                actionTextReact.textContent = ` reacted to your recent post `;
                message.appendChild(actionTextReact);

                const postText = document.createElement('span');
                const postLinkElement = document.createElement('a');
                postLinkElement.href = 'https://google.com';
                postLinkElement.textContent = notification.post;
                postLinkElement.classList.add('post-text-link');
                postLinkElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    window.open(postLinkElement.href);
                });
                postText.appendChild(postLinkElement)

                message.appendChild(postText);
                if(notification.status === 'NEW') {
                    listItem.classList.add('notification__new');
                    const notificationStatusSpan = addNotificationStatusDot();
                    message.appendChild(notificationStatusSpan)
                }
                message.appendChild(document.createElement('br'));
                const notificationTimeReact = defineNotificationTimeSpan(notification.time);
                message.appendChild(notificationTimeReact);
                break
            case 'FOLLOW':
                const userNameTextFollow = defineUserNameSpan(notification.userName);
                message.appendChild(userNameTextFollow);
                const actionTextFollow = document.createElement("span");
                actionTextFollow.textContent = ` followed you`;
                message.appendChild(actionTextFollow);
                if(notification.status === 'NEW') {
                    listItem.classList.add('notification__new');
                    const notificationStatusSpan = addNotificationStatusDot();
                    message.appendChild(notificationStatusSpan)
                }
                message.appendChild(document.createElement('br'));
                const notificationTimeFollow = defineNotificationTimeSpan(notification.time);
                message.appendChild(notificationTimeFollow);
                break
            case 'JOIN_GROUP':
            case 'LEFT_GROUP':
                const userNameTextGroup = defineUserNameSpan(notification.userName);
                message.appendChild(userNameTextGroup);
                const actionTextGroup = document.createElement("span");
                actionTextGroup.textContent = (notification.action === 'JOIN_GROUP') ? ' has joined your group ' : ' has left the group ';
                message.appendChild(actionTextGroup);

                const groupText = document.createElement('span');
                const linkElement = document.createElement('a');
                linkElement.href = 'https://google.com';
                linkElement.textContent = notification.group;
                linkElement.classList.add('group-text-link');
                linkElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    window.open(linkElement.href);
                });
                groupText.appendChild(linkElement)
                groupText.classList.add('group-text');

                message.appendChild(groupText)
                if(notification.status === 'NEW') {
                    listItem.classList.add('notification__new');
                    const notificationStatusSpan = addNotificationStatusDot();
                    message.appendChild(notificationStatusSpan)
                }
                message.appendChild(document.createElement('br'));
                const notificationTimeGroup = defineNotificationTimeSpan(notification.time);
                message.appendChild(notificationTimeGroup);
                break
            case "PRIVATE_MESSAGE":
                const userNameTextPrivateMessage = defineUserNameSpan(notification.userName);
                message.appendChild(userNameTextPrivateMessage);
                const actionTextPrivateMessage = document.createElement("span");
                actionTextPrivateMessage.textContent = ` sent you a private message `;
                message.appendChild(actionTextPrivateMessage);
                if(notification.status === 'NEW') {
                    listItem.classList.add('notification__new');
                    const notificationStatusSpan = addNotificationStatusDot();
                    message.appendChild(notificationStatusSpan)
                }
                message.appendChild(document.createElement('br'));
                const notificationTimePrivateMessage = defineNotificationTimeSpan(notification.time);
                message.appendChild(notificationTimePrivateMessage);
                const privateMessage = document.createElement("p");
                privateMessage.textContent = `${notification.message}`;
                privateMessage.classList.add('private-message');
                message.appendChild(privateMessage)
                break
            case "COMMENT_ON_PICTURE":
                const userNameTextComment = defineUserNameSpan(notification.userName);
                message.appendChild(userNameTextComment);
                const actionTextComment = document.createElement("span");
                actionTextComment.textContent = ` commented on your picture`;
                message.appendChild(actionTextComment);
                if(notification.status === 'NEW') {
                    listItem.classList.add('notification__new');
                    const notificationStatusSpan = addNotificationStatusDot();
                    message.appendChild(notificationStatusSpan)
                }
                message.appendChild(document.createElement('br'));
                const notificationTimeComment = defineNotificationTimeSpan(notification.time);
                message.appendChild(notificationTimeComment);
                break
        }

        listItem.appendChild(userImage);
        listItem.appendChild(message);
        if(notification.commentedPicture !== null) {
            const commentedImage = document.createElement('img');
            commentedImage.src = notification.commentedPicture;
            commentedImage.alt = notification.commentedPictureAltText;
            commentedImage.classList.add('commented-picture')
            listItem.appendChild(commentedImage);
        }
        notificationList.appendChild(listItem);
        notificationsNumber.innerText = String(notificationsNumberCounter)
    });
}

function defineUserNameSpan(userName) {
    const userNameText = document.createElement('span');
    const linkElement = document.createElement('a');
    linkElement.href = 'https://google.com';
    linkElement.textContent = userName;
    linkElement.classList.add('user-name-link');
    linkElement.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(linkElement.href);
    });
    userNameText.appendChild(linkElement)
    return userNameText
}
function defineNotificationTimeSpan(notificationTime) {
    const notificationTimeSpan = document.createElement('span');
    const time = getRelativeTime(new Date(notificationTime))
    notificationTimeSpan.textContent = `${time}`;
    notificationTimeSpan.style.color = 'hsl(219, 14%, 63%)';
    return notificationTimeSpan
}
function addNotificationStatusDot() {
    const notificationStatusSpan = document.createElement('span');
    notificationStatusSpan.classList.add('new-dot');
    return notificationStatusSpan
}

function markAllAsRead() {
    notifications.map((notification) => {
        notification.status = null;
    })
    createNotificationsList()
}

function getRelativeTime(timestamp) {
    const currentTime = Date.now();
    const timeDifference = currentTime - timestamp;

    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return days + " day" + (days > 1 ? "s" : "") + " ago";
    } else if (hours > 0) {
        return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    } else {
        return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    }
}