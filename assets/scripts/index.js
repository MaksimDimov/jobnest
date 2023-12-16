'use strict';

const peopleMayKnow = document.querySelector('.people-you-may-know');

fetch('https://randomuser.me/api/?results=10')
.then(response => response.json())
.then(data => {
    const users = data.results;

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('people-you-may-know-card');

        const userImg = document.createElement('img');
        userImg.src = user.picture.medium;
        userImg.alt = 'User Profile Picture';
        userImg.classList.add('people-you-may-know-img');

        const userName = document.createElement('p');
        userName.classList.add('people-you-may-know-name');
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userCity = document.createElement('p');
        userCity.classList.add('people-you-may-know-city');
        userCity.textContent = user.location.city;

        const textContentPeopleMayKnow = document.createElement('div');
        textContentPeopleMayKnow.classList.add('people-you-may-know-text-content');

        const addFriend = document.createElement('i');
        addFriend.classList.add('fa-solid', 'fa-plus', 'people-you-may-know-add-friend');
                    
        textContentPeopleMayKnow.appendChild(userName);
        textContentPeopleMayKnow.appendChild(userCity);

        userCard.appendChild(userImg);
        userCard.appendChild(textContentPeopleMayKnow);
        peopleMayKnow.appendChild(userCard);
        userCard.appendChild(addFriend);
    });
})
.catch(error => console.error('Error fetching data:', error));