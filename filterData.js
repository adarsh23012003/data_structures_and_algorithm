const data = [
  {
    id: 1,
    grade: 10,
  },
  {
    id: 2,
    grade: 4,
  },
  {
    id: 3,
    grade: 18,
  },
];

function getPassingTests(results) {
  //   for (let i = 0; i < results.length; i++) {
  //     if (results[i].grade >= 10) {
  //       data.push(results[i].grade);
  //     }
  //   }
  //   return data;
  return results.filter((currentValue) => {
    if (currentValue.grade >= 10) {
      return currentValue.grade;
    }
  });
}

console.log(getPassingTests(data));
