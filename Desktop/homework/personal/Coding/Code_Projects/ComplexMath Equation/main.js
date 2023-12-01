const sortByValueAndIndex = array =>
array.map((element,index) => [element * (index + 1), element])
     .sort((a,b) => a[0] - b[0])
     .map(element => element[1])