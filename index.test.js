 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }



  // let's run the test case for the jest

  test('Test the jest working', ()=>{
    expect(1).toBe(1);
  })

  // test to see if the data in the firstname is Patten

  test('test the data in the firstname is Patten', ()=>{
    expect(testData.firstName).toBe('Patten');
  })

  // let's test the actual functions that we are importing

  //  we will use the describe block for multiple tests

  describe('test to check the function formatTitle', () => {

    
    test('test the formatTitle function is returning a string', () => {
       
      // let's create a variable for the returning value of the func
    let title = formatTitle(testData.title)

      // type of will return the datatype in quotes 
    expect(typeof title).toBe("string")
    })
   
    // let's test to see is the formatTitle function is capitalizing the string

    test('test to formatTitle function is capitalizing the string', () => {
      let title = formatTitle(testData.title)

      expect(title).toBe("Nulla Ac")
    })


    
  })


  // difference between toBe vs toEqual

  // Answer is Reference types are equated differently than primitive type
  //  However toEqual works both reference and primitive types

  test('toBe Vs toEqual', () => {
    const obj1 = {num: 1}
    const obj2 = {num: 1}
    
    // test will be fail with toBe
    // expect(obj1).toBe(obj2)

    // but with toEqual it will pass
    expect(obj1).toEqual(obj2);
  })

  // let's test the shortBio function

  test('test to see shortBio is returning string', () => {
    let bio = shortenBio(testData.bio)
    expect(typeof bio).toEqual("string")
  })