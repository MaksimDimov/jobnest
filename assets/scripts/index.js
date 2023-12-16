'use strict';

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

  async function getRandomUsers(numUsers) {
    const apiUrl = `https://randomuser.me/api/?results=${numUsers}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const users = data.results;
      console.log(users);
  
      return users;
    } catch (error) {
      console.error('Error fetching random users:', error);
      return null;
    }
  }
  
  getRandomUsers(10);