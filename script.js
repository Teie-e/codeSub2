async function getUser() {
    const username = document.getElementById('username').value;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = `
            <img src="${userData.avatar_url}" alt="Profile Image" width="150">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio}</p>
                <p>Followers: ${userData.followers}</p>
                <p>Following: ${userData.following}</p>
                <p>Public Repositories: ${userData.public_repos}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching user data', error);
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = '<p>User not found</p>';
    }
}