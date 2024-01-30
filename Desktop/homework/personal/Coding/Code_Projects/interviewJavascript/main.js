
    let data={
      "_id": "65b850abfb9d7434aea1489a",
      "index": 0,
      "guid": "a2b7c6c7-7749-43f9-9815-f0eef657e277",
      "isActive": true,
      "balance": "$3,361.22",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": "Suzanne Shaffer",
      "gender": "female",
      "company": "EARGO",
      "email": "suzanneshaffer@eargo.com",
      "friends": [
        {
          "id": 0,
          "name": "Carson Mcbride"
        },
        {
          "id": 1,
          "name": "Padilla Vaughn"
        },
        {
          "id": 2,
          "name": "Olivia Bell"
        }
      ]
    }

    console.log(data.friends.length)

    
       let friends={ 
        friendsList:[{
          "id": 0,
          "name": "Freida Ryan",
          "otherFriends": 5
        },
        {
          "id": 1,
          "name": "June Franco",
          "otherFriends": 5
        },
        {
          "id": 2,
          "name": "Stephanie Davidson",
          "otherFriends": 3
        },
        {
          "id": 3,
          "name": "Campos Acevedo",
          "otherFriends": 2
        },
        {
          "id": 4,
          "name": "Vicky Stanley",
          "otherFriends": 7
        }]}

        //loop through the friends list
        let otherFrienTot = [] 
        friends.friendsList.forEach((friend)=>{
        console.log(friend.otherFriends)
        otherFrienTot.push(friend.otherFriends)

        })

        otherFrienTot =otherFrienTot.reduce((acc,curr)=>acc+curr,0)

        console.log(otherFrienTot)


        //push num to array and sum 
      
  try{
    console.log(123)
    throw ('I broke')
  }
  catch(e){
console.log(e)
  }