const findTheOldest = function(array) {
    return array.reduce((oldest , currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        console.log('oldest', oldest);
        const currentAge  = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        console.log('current', currentPerson);
        console.log('return current', currentAge);
        console.log('return oldest', oldestAge);
        return oldestAge < currentAge ? currentPerson : oldest
    })
};
const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    } 
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
