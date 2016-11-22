exports.config = {

  seleniumAddress: 'http://localhost:4444/test/hub',
  specs: ['tests/e2e/*.js'],
  multicapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};
