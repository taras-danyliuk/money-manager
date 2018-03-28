export default (function IIFE() {
  Array.prototype.move = function (element, offset) {
    const index = this.indexOf(element);
    const newIndex = index + offset;
    let removedElement = null;

    if (newIndex > -1 && newIndex < this.length) removedElement = this.splice(index, 1)[0];

    this.splice(newIndex, 0, removedElement);
  };

  const defaultSources = [
    {
      id: 1,
      name: 'Wallet',
      amount: 0,
    }, {
      id: 2,
      name: 'Card',
      amount: 0,
    }
  ];

  const defaultCategories = [
    {
      id: 1,
      name: 'Groceries',
      amount: 0,
    }, {
      id: 2,
      name: 'Eating Outside',
      amount: 0,
    }, {
      id: 3,
      name: 'Transport',
      amount: 0,
    }, {
      id: 3,
      name: 'Entertainment',
      amount: 0,
    }, {
      id: 5,
      name: 'House',
      amount: 0,
    }
  ];

  const sources = localStorage.getItem('sources');
  const categories = localStorage.getItem('categories');

  if (!sources) {
    localStorage.setItem('sources', JSON.stringify(defaultSources));
  }

  if (!categories) {
    localStorage.setItem('categories', JSON.stringify(defaultCategories));
  }
})()
