// interfaccia può essere implementata
interface Link {
    title: string,
    url:string
}

// type è un altro modo è quello di definire un tipo () e non può essere implementata
type Link2 = {
    title: string,
    url:string
}

// src > filterByTerm.js
function filterByTerm(inputArr: Array<Link> , searchTerm: string ) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line

    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement: Link ) {
      return arrayElement.url.match(regex);
    });
 }

 filterByTerm([{title:"titolo", url:"https://wwww.google.it"}],"bb");
