const baseLocation = ["London", "New York", "Tokyo", "Bali", "Germany", "Iceland", "Scotland"];
const spiritAnimal = ["Polar Bear", "Wolf", "Giraffe", "Shark", "Otter", "Lion", "Rat"]
const todaysLuck = ["Bad", "Not great", "Amazing", "God like", "Will be okay", "Buy a lottery ticket"]

let mixedMessages = (arrOne, arrTwo, arrThree) => {

    let messageOne = arrOne[Math.floor(Math.random() * (arrOne.length - 1))];
    let messageTwo = arrTwo[Math.floor(Math.random() * (arrTwo.length -1))];
    let messageThree = arrThree[Math.floor(Math.random() * (arrThree.length -1))];

    return `Messages for you today are: 

    You should base yourself today in ${messageOne}.

    Your Spirit Animal today is ${messageTwo}.

    Your Luck today will be ${messageThree}.`
    
}

console.log(mixedMessages(baseLocation, spiritAnimal, todaysLuck));