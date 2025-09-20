 const menu = {
      Home: {},
      Products: {
        Electronics: { Phones: {}, Laptops: {} },
        Clothing: { Men: {}, Women: {} }
      },
      Contact: {}
    };

    let items = document.getElementById("items");

    function createMenu(menuObject) {
      let ul = document.createElement("ul");

      for (let key in menuObject) {
        let li = document.createElement("li");
        li.textContent = key;

        // if this key has children → call recursion
        if (Object.keys(menuObject[key]).length > 0) {
          let childUl = createMenu(menuObject[key]);
          li.appendChild(childUl);
        }

        ul.appendChild(li);
      }

      return ul;
    }

    // generate and attach menu
    items.appendChild(createMenu(menu));