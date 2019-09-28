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
    logData: function () {
      return data
    }
  }
})()
// UI Controller
const UICtrl = (function () {
  return {}
})()
// App Controller
const App = (function (ItemCTRL, UICtrl) {
  return {
    init: function () {
      console.log('initializing app')
    }
  }
})(ItemCTRL, UICtrl)

// Initialize App

App.init()
