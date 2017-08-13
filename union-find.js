let n = 10
let joined = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9],
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0],
  [6, 7],
]

function UF(n) {
  this.N = Number(n) || 0
  // Set id of each object to itself (N array accesses)
  let id = Array(this.N).fill(undefined).map((u, i) => i)

  this.connected = (p, q) => id[p] === id[q]

  this.union = (p, q) => {
    let pid = id[p]
    let qid = id[q]
    for (let i = 0; i < id.length; i++) {
      if (id[i] === pid) {
        id[i] = qid
      }
    }
  }
}
