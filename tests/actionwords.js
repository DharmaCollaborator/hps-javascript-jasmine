var Actionwords = {
  iStartTheCoffeeMachine: function (lang) {
    this.sut.start(lang);
  },

  iShutdownTheCoffeeMachine: function () {
    this.sut.stop();
  },

  messageMessageShouldBeDisplayed: function (message) {
    expect(this.sut.get('message')).toEqual(message || "");
  },

  coffeeShouldBeServed: function () {
    expect(this.sut.get('coffeeServed')).toBeTruthy();
  },

  coffeeShouldNotBeServed: function () {
    expect(this.sut.get('coffeeServed')).toBeFalsy();
  },

  iTakeACoffee: function () {
    this.sut.takeCoffee();
  },

  iEmptyTheCoffeeGrounds: function () {
    this.sut.emptyGrounds();
  },

  iFillTheBeansTank: function () {
    this.sut.fillBeans();
  },

  iFillTheWaterTank: function () {
    this.sut.fillTank();
  },

  iTakeCoffeeNumberCoffees: function (coffee_number) {
    this.handled = this.handled || [];

    while ((coffee_number > 0)) {
      this.iTakeACoffee();
      coffee_number = coffee_number - 1;

      if (this.handled.indexOf('water') >= 0) {
        this.iFillTheWaterTank();
      }

      if (this.handled.indexOf('beans') >= 0) {
        this.iFillTheBeansTank();
      }

      if (this.handled.indexOf('grounds') >= 0) {
        this.iEmptyTheCoffeeGrounds();
      }
    }
  },

  theCoffeeMachineIsStarted: function () {
    this.iStartTheCoffeeMachine();
  },

  iHandleWaterTank: function () {
    this.handled = this.handled || [];
    this.handled.push('water');
  },

  iHandleBeans: function () {
    this.handled = this.handled || [];
    this.handled.push('beans');
  },

  iHandleCoffeeGrounds: function () {
    this.handled = this.handled || [];
    this.handled.push('grounds');
  },

  iHandleEverythingExceptTheWaterTank: function () {
    this.iHandleCoffeeGrounds();
    this.iHandleBeans();
  },

  iHandleEverythingExceptTheBeans: function () {
    this.iHandleWaterTank();
    this.iHandleCoffeeGrounds();
  },

  iHandleEverythingExceptTheGrounds: function () {
    this.iHandleWaterTank();
    this.iHandleBeans();
  }
};