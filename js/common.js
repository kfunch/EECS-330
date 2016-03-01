document.body.innerHTML += '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" \
         aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;"> \
      <div class="modal-dialog"> \
	<div class="loginmodal-container"> \
	  <h1>Welcome to NU :)</h1><br> \
	  <form> \
	    <input type="text" name="user" placeholder="Username" value="wildcat200"> \
	    <input type="password" name="pass" placeholder="Password" value="you never know"> \
	    <input type="submit" name="login" class="login loginmodal-submit" value="Login"> \
	  </form> \
	  <div class="login-help"> \
	    <a href="#">Register</a> - <a href="#">Forgot Password</a> \
	  </div> \
	</div> \
      </div> \
</div>'

login = document.getElementById('login');
register = document.getElementById('register');

if (document.cookie && (document.cookie != "not set")) {
    register.innerHTML = '<span class="glyphicon glyphicon-user"></span> ' + document.cookie;
    login.innerHTML = '<span class="glyphicon glyphicon-log-in"></span> Logout';
    login.onclick = function () {
        document.cookie = "not set";
        location.reload();
    }
}
else {
    login.setAttribute('data-toggle', "modal");
    login.setAttribute('data-target', "#login-modal");
    submit_button = document.getElementsByName('login')[0];
    submit_button.onclick  = function () {
        document.cookie = "Stark";
        location.reload();
    }
}
