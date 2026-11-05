// Level 1 : Bitwise Operations
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

// Level 2 : A Redundant Function
function redundant(str) {
  return function () {
    return str;
  };
}

// Level 3 : Get Notes Distribution

function getNotesDistribution(students) {
  return students
    .flatMap(student => student.notes)
    .filter(note => [1, 2, 3, 4, 5].includes(note))
    .reduce((dist, note) => {
      dist[note] = (dist[note] || 0) + 1;
      return dist;
    }, {});
}
