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
login.setAttribute('data-toggle', "modal");
login.setAttribute('data-target', "#login-modal");

