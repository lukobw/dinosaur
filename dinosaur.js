var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
 var dinosaur = 'triceratops';
 var dinosaurUpperCase = dinosaur.toUpperCase();
 
 console.log(dinosaurUpperCase);
 
 var textChange = text.replace('Velociraptor', dinosaurUpperCase);
 console.log(textChange);
 
 console.log(textChange.slice(textChange.length / 2));
