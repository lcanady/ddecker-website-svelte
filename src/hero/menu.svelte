<div id="menuOverlay">
{ #if visible}
    <div id="menu" transition:fly="{{ x: 600, duration: 1000 }}">
        <div class="contact">
			<a href='tel:#'>
				<img alt='Logo' src='./imgs/telephone.png'>
				<span class=light>CALL US</span>(971) 218-4561
			</a>
            <div id='close'>
                <img src='./imgs/close_menu.png' alt="close Button" on:click={closeMenu}>
            </div>
        </div>
        <div id="links">
            <ul>
                <li><a href="#" class="light">Pricing</a></li>
                <li><a href="#" class="light">Education</a></li>
                <li><a href="#" class="light">Services</a></li>
                <li><a href="#" class="light">resources</a></li>
                <li><a href="#" class="light">Blog</a></li>


            </ul>
        </div>	
	</div>
    {/if}
</div>

<script>
    import { fly } from 'svelte/transition';
    let visible = false;
    const closeMenu = () => {
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('menuOverlay');
        menu.style.display = 'None';
        overlay.style.display = 'None';

    } 
</script>

<style>
#links {
    padding-left: 40px;
    padding-top: 150px;
}

#links ul {

    list-style-type: none;
 }

#links ul li {
    padding-bottom: 40px;
}

#links ul li a {
    font-size: 2rem;
}

#menuOverlay { 
    position: Absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;
}

#menu { 
    display: none;
    position: relative;
    height: 100%;
    background-image: url('./imgs/abstract-bg-blue.png');
    background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
    width: 700px;
    margin-left: auto;
    z-index: 3;
    box-shadow: -10px 0 25px rgba(0,0,0,.2);

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

	.light { 
		font-weight: lighter;
		padding-left: 20px;
		padding-right: 20px;
	}

	.contact {
        position: absolute;
		display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding-top: 40px;
        padding-left: 50px;
	}

    #close {
        display: flex;
       margin-right: 130px;
        margin-left: auto;
    }

</style>