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
    // CREATE LIST ITEM
    const listItem = document.createElement('li');
    listItem.classList.add('notification');
    // ADD USER IMAGE
    const userImage = document.createElement('img');
    userImage.src = notification.imageSrc;
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
            postText.textContent = notification.post;
            postText.style.color = 'hsl(219, 12%, 42%)';
            postText.style.fontWeight = "bold";
            message.appendChild(postText);
            if(notification.status === 'NEW') {
                listItem.classList.add('notification_new');
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
                listItem.classList.add('notification_new');
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
            groupText.textContent = notification.group;
            groupText.style.color = 'hsl(219, 85%, 26%)'
            groupText.style.fontWeight = "bold"
            message.appendChild(groupText)
            if(notification.status === 'NEW') {
                listItem.classList.add('notification_new');
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
                listItem.classList.add('notification_new');
                const notificationStatusSpan = addNotificationStatusDot();
                message.appendChild(notificationStatusSpan)
            }
            message.appendChild(document.createElement('br'));
            const notificationTimePrivateMessage = defineNotificationTimeSpan(notification.time);
            message.appendChild(notificationTimePrivateMessage);
            const privateMessage = document.createElement("p");
            privateMessage.textContent = `${notification.message}`;
            privateMessage.classList.add('private_message');
            message.appendChild(privateMessage)
            break
        case "COMMENT_ON_PICTURE":
            const userNameTextComment = defineUserNameSpan(notification.userName);
            message.appendChild(userNameTextComment);
            const actionTextComment = document.createElement("span");
            actionTextComment.textContent = ` commented on your picture`;
            message.appendChild(actionTextComment);
            if(notification.status === 'NEW') {
                listItem.classList.add('notification_new');
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
        commentedImage.classList.add('commented_picture')
        listItem.appendChild(commentedImage);
    }
    notificationList.appendChild(listItem);
});

function defineUserNameSpan(userName) {
    const userNameText = document.createElement('span');
    userNameText.textContent = userName;
    userNameText.style.fontWeight = "bold"
    return userNameText
}
function defineNotificationTimeSpan(notificationTime) {
    const notificationTimeSpan = document.createElement('span');
    notificationTimeSpan.textContent = `${notificationTime}`;
    notificationTimeSpan.style.color = 'hsl(219, 14%, 63%)';
    return notificationTimeSpan
}
function addNotificationStatusDot() {
    const notificationStatusSpan = document.createElement('span');
    notificationStatusSpan.classList.add('new-dot');
    return notificationStatusSpan
}


