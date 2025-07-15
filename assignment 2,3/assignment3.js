// Q1: Remove state names starting with vowels
let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Karnataka", "Tamil Nadu", "Assam", "Punjab"];
let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);


// Q2: Reverse words in a string
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);


// Q3: Modify 'INDIA' to 'INDONESIA' using splice
let string = ['I', 'N', 'D', 'I', 'A'];
string.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(string.join(''));


// Q4: Count vowels and consonants in a string
let text = "This is an example string with multiple words.";
let vowels = text.match(/[AEIOUaeiou]/g)?.length || 0;
let consonants = text.match(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/g)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);


// Q5: Replace wrong word with correct word
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log(correctfn("I love JScript", "JScript", "JavaScript"));


// Q6: Filter numbers greater than 5
let inputArr = [1,2,3,9,10,7,5,4,3];
let filteredArr = inputArr.filter(num => num > 5);
console.log(filteredArr);


// Q7: Calculate average scores of students
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentsWithAverage = students.map(student => {
    let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average };
});

console.log(studentsWithAverage);


// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number. 
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

// Example usage:
console.log(repeatedSumOfDigits(456)); // Output: 6


// Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
// Example usage:
console.log(countWords("This is a sample paragraph.")); // Output: 5


/* Q10)  Write a function to reverse a string.
 Input - Hello
 Output - olleH*/
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("Hello")); // Output: olleH


/* Q11)
Input
[student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/
function calculateAverages(students) {
    return Object.fromEntries(
        Object.entries(students).map(([student, subjects]) => {
            const scores = Object.values(subjects);
            const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
            return [student, { average }];
        })
    );
}

// Input
const student = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Output
console.log(calculateAverages(student));
