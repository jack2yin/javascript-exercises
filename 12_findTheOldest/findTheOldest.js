/* Pseudo Code Breakdown
 
Store birth date and death date
- collect birth year and death year
 
Subtract birth date from death date
 
Oldest age is determined via value comparison
- must return the name of the oldest person
 
If death date is undefined, then substract birth date from Date() method
 
 
*/

/* HOW I DID IT FROM MY UNDERSTANDING
 
const findTheOldest = function (arr) {

function caculateAge(birth, death) {
    birth = arr.map(year => year.yearOfBirth)
    death = arr.map(year => year.yearOfDeath);
 
    return death - birth
}
 
arr.reduce( (sum, person) => {
    personOneAge = person.calculateAge()
    personTwoAge = sum - personOneAge;
 
})

}
 
*/


/* TYPING OUT THE SOLUTION LINE BY LINE TO UNDERSTAND SYNTAX */

const getAge = function (birth, death) {
    if (!death) {                       // If the person has no 'yearOfDeath'
        death = new Date().getFullYear();   // Assume they're still alive and use the current year
    }
    return death - birth;
    // This function only has one purpose: to calculate age, simple.
    // There is no need to deploy arr methods to overcomplicate it
}

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        /* 
        The return in the findTheOldest function ensures "findTheOldest" will hold the result of 
        ... the reduce method.
    
        The reduce method itself needs to output a final result after it has iterated through 
        ... the entire array.
    
        return from reduce:
        - After the final iteration, reduce returns the final oldest value (the object representing
        ... the oldest person)
        - This value is then returned by the findTheOldest function

        reduce() method iterates through the people array
        oldest: stores previous array iteration
        currentPerson: The person currently being checked in the loop
        */

        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        // a callback function is deployed while declaring a variable
        // the function returns a value and assigns it to the const variable
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        /* In the first iteration:
        The first person (object) in the array is automatically treated as the 
        ... "oldest" at the start
        The second object is compared as "currentPerson"
        */

        // Comparison logic to determine the oldest person
        return oldestAge < currentAge ? currentPerson : oldest;
        /* 
        
        reduce accumulates the value you choose to return at the end of each iteration. In this case,
        ... you're returning the object representing the oldest person, not a sum of ages.
 
        The value of oldest is updated to the currentPerson (the object, not a number) whenever 
        ... the currentPerson has a greater age than the previous oldest. It doesn't store or add 
        ... the numerical ages - it's storing the person object.
 
        The return statement in this code determines what will be stored in "oldest"
        ... for the next iteration
 
        return inside the reduce callback:
        Determines the value of "oldest" that gets passed to the next iteration
            - if currentPerson is older, it becomes the new oldest
            - Otherwise, oldest stays the same
        */

    } /*, 0 */)
    /* Initial Value:
     The initial value (0) doesn’t directly apply to the callback because the function 
     ... overwrites oldest with the first person in the array. If you omit 0 entirely, 
     ... reduce automatically uses the first element of the array as the initial oldest value
    */
}

// Do not edit below this line
module.exports = findTheOldest;
