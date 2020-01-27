export function getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email" required>
                <label for="email">Email</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required autocomplete="on">
                <label for="password">Password</label>
            </div>
            <button 
                type="submit" 
                class="mui-btn mui-btn--raised mui-btn--primary">Sign in</button>
        </form>       
    `
}

export function authEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyAHcUIkxQyR_A1wcPmCYtqUJujFTwnR8n4'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({ 
            email, 
            password, 
            returnSecureToken: true 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.idToken)
}