describe('Serve coffee', function () {
  beforeEach(function () {
    this.actionwords = Object.create(Actionwords);
    this.actionwords.sut = CoffeeMachine();
  });

  it('Simple use', function () {
    // Well, sometimes, you just get a coffee.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });
});
