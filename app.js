// storage controller

// Item Controller
const ItemCTRL = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // Data Structure / State
  const data = {
    items: [
      {
        id: 0,
        name: 'Steak Dinner',
        calories: 1200
      },
      {
        id: 1,
        name: 'Cookie',
        calories: 400
      },
      {
        id: 2,
        name: 'Eggs',
        calories: 300
      }
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {
    getItems: function () {
      return data.items
    },
    addItem: function (name, calories) {
      let ID
      // create id
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }
      // calories to number
      calories = parseInt(calories)

      // Create new item
      newItem = new Item(ID, name, calories)
      // add to items array
      data.items.push(newItem)
    },
    logData: function () {
      return data
    }
  }
})()
// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  return {
    populateItemList: function (items) {
      let html = ''
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-itme fa fa-pencil"></i>
        </a>
      </li>`
      })

      // insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function () {
      return UISelectors
    }
  }
})()
// App Controller
const App = (function (ItemCTRL, UICtrl) {
  // Load event listener
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors()

    // add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit)
  }

  // Add Item submit
  const itemAddSubmit = function (e) {
    // Check inputs
    const input = UICtrl.getItemInput()
    // Check for name and calorie input

    if (input.name !== '' && input.calories !== '') {
      // add item
      const newItem = ItemCTRL.addItem(input.name, input.calories)
    }

    e.preventDefault()
  }
  return {
    init: function () {
      console.log('initializing app')
      // fetch items from data structure
      const items = ItemCTRL.getItems()

      // populate list items
      UICtrl.populateItemList(items)

      // Load event listeners

      loadEventListeners()
    }
  }
})(ItemCTRL, UICtrl)

// Initialize App

App.init()
