function GradosRadianes(grados) {
    var radianes = grados * (Math.PI / 180);
    return radianes;
  }
  
  var grados = parseFloat(prompt("Ingresa el valor en grados:"));
  var radianes = GradosRadianes(grados);
  
  console.log(radianes);
  
  