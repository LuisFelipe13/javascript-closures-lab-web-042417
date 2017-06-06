const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  // var animal = {}
    return function (deadlyDevice) {
      return {
        animalType,
        deadlyDevice
      }
      // animal.animalType = animalType
      // animal.deadlyDevice = deadlyDevice
      // return animal
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
