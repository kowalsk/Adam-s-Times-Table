if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);


    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
            tableCreate();
        }
    });
    
    
    
    
    
    
    function tableCreate() {
  var body = document.body,
    tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.style.height = '100%';
  tbl.style.border = '1px solid black';
  
  //var table1 = document.getElementById("table");
//alert(table1.offsetHeight);
console.log("dda");

  for (var i = 0; i < 3; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break;
      } else {
        var td = tr.insertCell();
        td.appendChild(document.createTextNode('Cell'));
        td.style.border = '1px solid black';
        if (i == 1 && j == 1) {
          td.setAttribute('rowSpan', '2');
        }
      }
    }
  }
  body.appendChild(tbl);
}


    
    
    
    
}



if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}