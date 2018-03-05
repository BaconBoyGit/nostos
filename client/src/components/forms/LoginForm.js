import React from 'react'

const LoginForm = () => {

	return (      
	
	<div className ="login">   
		<center>            
			<div class="b b-- b--fw">
				<div class="b-c">
				
						<h2 class="sh-title">Application for Moving Truck Permit</h2>
				
				</div>
			</div>
		</center>

		<form action="https://boston.gov" method="POST">
			<div class="fs">
			<div align="center">
			<div class="txt g--6">
				<label for="first_name" class="txt-l txt-l--mt000">Email Address</label>
				<input id="first_name" type="text" placeholder="Email" class="txt-f" required/>
			</div>
			</div>
			<div class="fs-c fs-c--i">    
				<div class="txt">
				<div align="center">
					<label for="text" class="txt-l">Password</label>
					<input id="text" type="password" placeholder="Password" class="txt-f" required />
				</div>
				</div>
			</div>
			</div>

			<div class="bc bc--r">
				<center>
					<button id="login" type="submit" class="btn btn--700">Login</button>      
				</center> 
			</div> 
		</form>  

		<div class="bc bc--r">					
			<center>
				<button id="apply" class="btn btn--700">Apply </button>
			</center>
		</div> 
	</div>
		

	)
}

export default LoginForm;