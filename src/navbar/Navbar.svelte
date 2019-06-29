<div id="navbar">
	<div  class=inner>
	<div class=logo>
		<img alt='Logo' src='./imgs/logo.png'>
	</div>
		<a href='tel:#'>
			<img alt='Logo' src='./imgs/telephone.png'>
			<span class=light>CALL US</span>(971) 218-4561
		</a>
		<img class="hamburger" src="./imgs/hamburger.png" alt="Hamburger Menu" />
	</div>
</div>

<style>
	#navbar {
        height: 15vh;
		width:100%;
		background-image: url('/imgs/abstract-bg-blue.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.inner {
		display: flex;
		
        max-width: 1440px;
        height: 100%;
		width: 95%;
		align-items: center;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		flex-grow: 2;
	}

	a, 
	a:hover,
	a:visited,
	a:focus {
		font-family: 'Muli', sans-serif;
		text-decoration: none;
		color: white; 
		font-family: Muli;
		font-style: normal;
		font-weight: bold;
		font-size: 1.5rem;
		display: flex;
		align-items: center;

	}

	a  {
		font-weight: bolder;
		align-items: center;
	}

	.light{ 
		font-weight: lighter;
		padding-left: 20px;
		padding-right: 20px;
	}

	.hamburger{
		padding-left: 40px;
	}

</style>