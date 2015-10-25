
$('#encrypt').on('click', function(){
  var encoder = {
    setMessage: function() {
       this.message = document.getElementById('message').value;
    },

    getPassword: function()
      var password = prompt("what is the password");  //per AMY
      if(password === null) {
        alert("no Password was entered.");
        return
      };
      while(password === ""){
        password = prompt("Enter your password");
      };
      this.password = password;
    },
    setUrl: function() {
      var oldUrl = window.location.href;
      console.log(this.message);
      console.log(this.password);
      this.encryptedM = this.encrypt(this.message, this.password);
      console.log(this.encryptedM); //per AMY

    },
    replaceMessageWithUrl: function () {
      var revPath = window.location.href.split('').reverse().join('');
      var cleanPath = revPath.slice(revPath.indexOf('/')).split('').reverse().join('')
      var message = document.getElementById('message');  //per AMY
      message.value = "Your encrypted message is available to anyone with THE password at: \n\n";
      message.value += cleanPath + "decodeit.html?" + this.encryptedM;
    },
    encrypt: function(message, password) {
      cypher = CryptoJS.AES.encrypt(message, password)
      console.log("Verified: " +
        CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8));
      return cypher
    },
    protect: function() {
      console.log('somehowhere');
      this.setMessage();
      this.getPassword();
      this.setUrl();
      this.replaceMessageWithUrl();
    },
  }
  encoder.protect();
});



