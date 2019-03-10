async function getUserFriends(){
    let user = await fetchJson('/user/laura');
    let friendIDs = await fetchJson(`/friends/${user.id}`);
    let promises = friendIDs.map((id) =>{
        return fetchJson(`/users/${id}`);
    });
    let friends = await Promise.all(promises);
    console.log(friends);
}

let promise = getUserFriends