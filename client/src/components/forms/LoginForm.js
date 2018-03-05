import React from 'react'

const signinContainer = {
	marginLeft: '10%',
	marginRight: '10%',
	marginBottom: '5%'
}
const LoginForm = () => {

	return (      
	
	<div className ="signin-container" style = { signinContainer }>   
		<center>            
			<div className="b b-- b--fw">
				<div className="b-c">
				
						<h2 className="sh-title">Application for Moving Truck Permit</h2>
				
				</div>
			</div>
		</center>

		<form action="https://boston.gov" method="POST">
			<div className="fs">
			<div align="center">
			<div className="txt g--6">
				<label htmlFor="first_name" className="txt-l txt-l--mt000">Email Address</label>
				<input id="first_name" type="text" placeholder="Email" className="txt-f" required/>
			</div>
			</div>
			<div className="fs-c fs-c--i">    
				<div className="txt">
				<div align="center">
					<label htmlFor="text" className="txt-l">Password</label>
					<input id="text" type="password" placeholder="Password" className="txt-f" required />
				</div>
				</div>
			</div>
			</div>

			<div className="bc bc--r">
				<center>
					<button id="login" type="submit" className="btn btn--700">Login</button>      
				</center> 
			</div> 
		</form>  

		<div className="bc bc--r">					
			<center>
				<button id="apply" className="btn btn--700">Apply </button>
			</center>
		</div> 
	</div>
		

	)
}

export default LoginForm;