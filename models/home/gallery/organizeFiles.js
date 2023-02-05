const organizeFiles = (list) => {
  const arr = []
  let i = 0

  list.forEach((item) => {
    if (arr.length > 0) {
      if (i % 2 == 0) {
        arr[i] = [item]
        i++
      } else {
        if (!arr[i]) {
          arr[i] = [item]
        } else {
          arr[i].push(item)
          i++
        }
      }
    } else {
      arr[i] = [item]
      i++
    }
  })

  return arr
}

export default organizeFiles