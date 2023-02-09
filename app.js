let a = [
    "server has been started......",
    "Initializing Hack tool...",
    "Connecting to instagram...",
    "Connecting to server 1...",
    "Connecting to server 2...",
    "Connection failed. Retrying...",
    "Connecting to server 3...",
    "Connected Successfully...",
    "Username : sujata_patel.1430...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 1000)

    })
}
const showhack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"

}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showhack(a[i])
    }
})()
