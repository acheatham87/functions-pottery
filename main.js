

const buyClay = () => {
    const bought = {}
    return bought
}
const clay = buyClay()
console.log(clay)

const makePottery = (object) => {
    object.shape = "Bowl"
    return object
}
const madePottery = makePottery(clay)
console.log(madePottery)

const bisqueFire = (object) => {
    object.readyForGlazing = true
    return object
}
const fired = bisqueFire(madePottery)
console.log(fired)

const glazePottery = (object) => {
    if (readyForGlazing = true) {
        object.glazing = "Midnight Blue"
        return object
    }
    else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}
const glazed = glazePottery(fired)
console.log(fired)

const finalFiring = (object, temp) => {
    if (temp > 1200) {
        object.cracked = true
        return object
    }
    else {
        object.cracked = false
        return object
    }
}

const final = finalFiring(fired, 1400)
console.log(final)