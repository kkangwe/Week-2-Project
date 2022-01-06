const NameCalculator = (CC, YY, MM, DD, gender) => {
    // BODMAS
    const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    let wholeNumber = Number(calculationResult.toFixed())

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (wholeNumber >= 7) {
        
        // Extra work would be to randomize wholeNumber
        // Using Math library
        wholeNumber = wholeNumber - 1;
    }

    if (gender == 'Male') {
        return { 'name': maleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    } else {
        return { 'name': femaleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    }
}

const handleClick = () => {
    // Step One - Retrieve refrence to HTML elements
    const birthDayBox = document.getElementById("birthDay")
    const birthMonthBox = document.getElementById("birthMonth")
    const birthYearBox = document.getElementById("birthYear")
    const birthGenderBox = document.getElementById("Gender")

    // Step Two - Retrieve input elements values
    const birthDay = birthDayBox.value;
    const birthMonth = birthMonthBox.value;
    const birthYear = birthYearBox.value;
    const birthGender = birthGenderBox.value;

    // Gender
    const allGendersArray = ["Male", "Female"]
    if (allGendersArray.includes(birthGender)) {
        // CC = Century
        // YY = Year
    
        const centuryVar = String(birthYear).substring(0, 2)
        const yearVar = String(birthYear).substring(2)
            // Check that day and month are valid
        if (birthDay <= 0 || birthDay > 31) {
            alert('Please enter a valid Birth Day')
        } else if (birthMonth <= 0 || birthMonth > 12) {
            alert('Please enter a valid Birth Month')
        } else {
            // Execute calculation
            const Name = NameCalculator(centuryVar, yearVar, birthMonth, birthDay, birthGender);
            alert(`Your  name is ${Name.name} born on ${Name.day}`)
        }
    } else {
        alert('Please enter either Male or Female in the Birth Gender box')
    }
} 



