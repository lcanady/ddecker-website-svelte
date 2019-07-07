
<script>
    import { visible } from '../store/store.js';
    import { slide , fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

</script>


{#if $visible}
<div id="menuOverlay" transition:fade>
    <div id="menu" transition:fly="{{ delay:500, y:100, duration: 400}}">
       <div class="contact" transition:fade >
			<a href='tel:#'>
				<img alt='Logo' src='./imgs/telephone.png'>
				<span class=light>CALL US</span>(971) 218-4561
			</a>
            <div id="close"
                on:click={()=> visible.toggle()}
            >
                &times;
            </div>
        </div>
    </div>
</div>
{/if}

<style>
#menu {
    position:relative;
    display: flex;
    margin-left: auto;
    height: 100vh;
    width: 620px;
    background-image: url('/imgs/abstract-bg-blue.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

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
    display: block;
    opacity: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;
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

    #close{
        display: flex;
        color:white;
        font-size: 3rem;
        font-weight: bold;     
       margin-right: 80px;
        margin-left: auto;
        cursor: pointer;

    }

</style>