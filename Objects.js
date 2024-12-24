//Data Types: Object, String, number, boolean, null, undefined.
//JSON:
// objects: 1.JSON object {key: value pair},
// 2. Array Object {ele1, ele2, ele3...}
//// 3. Functions
const s1 = {
    Name: 'Priya',
    Age: 24,
    Fess_Paid: 3400.78,
    Work_Experience: {
        ABC: '3 Months',
        XYZ: '2 Months'
    },
    Marks: {
        Maths: 45,
        Science: 56
    },
    Percentage: [
        'Sem-1: 84',
        'Sem-2: 86',
        'Sem-3: 88'
    ],
    Performance: ()=>console.log('Good'),
}

console.log(s1.Name, s1.Age);