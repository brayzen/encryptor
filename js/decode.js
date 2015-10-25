url = location.href;
var cypher = url.slice(url.indexOf('?') + 1);

var decode = function(cypher){
  var password = prompt('Whats the password?');
  var secretMsg = CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8);

  if (cypher && secretMsg){
    if (secretMsg === ""){
      return;
    } else {
      alert(secretMsg);
      $('#secret').html(secretMsg);
    }

  } else {
    alert('Not the password.  Try again.');
    decode(cypher);
  }
};

decode(cypher);





