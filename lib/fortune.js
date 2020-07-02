// List of fortunes. Add to this list ad infinitum
const fortuneCookies = [
    "You will drown in three inches of water.",
    "Your head has always looked the wrong size for your frame",
    "One in three people has herpes. Look left. Look right. Look down.",
    "You will die alone and poorly dressed",
    "Life is a symphony - and you're playing the kazoo."
]

exports.getFortune = () => {
    const index = Math.floor(Math.random()*fortunes.length)
    return fortuneCookies[index]
}
