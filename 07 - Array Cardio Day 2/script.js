    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      const adultChecker = people.some(person => (new Date().getFullYear()) - person.year >= 19);

      console.log({adultChecker});

      // Array.prototype.every() // is everyone 19 or older?
      const allAdults = people.every(person => (new Date().getFullYear()) - person.year >= 19);

      console.log({allAdults});
  
      // Array.prototype.find()
      // Returns the first item it can find

      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const commentFinder = comments.find(comment => comment.id === 542328);

      console.log(commentFinder);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const indexChecker = comments.findIndex(comment => comment.id === 542328);

      console.log(indexChecker);

      // Two ways of deleting an item:

      // 1: splice
      comments.splice(indexChecker, 1);
      console.table(comments);
      
      // 2: creating a new array that combines two arrays
      const newArray = [
          ...comments.slice(0, indexChecker),
          ...comments.slice(indexChecker + 1)
      ];

      console.table(newArray);