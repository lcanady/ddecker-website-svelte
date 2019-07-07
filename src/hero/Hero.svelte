<script>
    import Navbar from '../navbar/Navbar.svelte';
    import Form from './form.svelte'
    import Menu from './menu.svelte'
</script>

<div class="wrapper">
    <Menu />
    <div class="overlay">
        <Navbar />
        <div class="container">
            <div class="left">
                <h2>Mindful and Calming</h2>
                <h1>IT Consultation & Servicing</h1>
                <h3>In A Chaotic Techincal World</h3>
                <img class="divider" src="./imgs/divider.png" alt= "golden divider">
                <p>There needs to be a change in the way people feel about the technical world and the various connected services they use in their daily and professional lives. We believe that our customer's technical needs can be addressed in a calm, mindful and skillful way. With a combined 40 years of experience, there’s no problem too big (or small).</p>
                <button class=contact>
                  <a href='tel:#'>
                    <img alt='Logo' src='./imgs/telephone.png'>
                    <span class=light>CALL US</span>(971) 218-4561
                  </a>
                </button>
            </div>
            <div class="right">
                <div class="form">
                    <Form />
                </div>
                <div class="contact">


                </div>
            </div>
        </div>
    </div>
    
</div>



<style>
.wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('./imgs/mobo-bg.jpg');
    background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

.overlay {
    height: 100%;
    width: 100%;
    
    background: rgba(0,0,0,.7)
}

.container {
    display: flex;
    margin: 0 auto;
    max-width: 1440px;
    width: 80%;
    
}

.light {
  font-style: normal;
  font-weight: lighter;
  padding: 0 10px;
}

h1 { 
    color: white;
    font-family: Merriweather;
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    line-height: 62px;
    padding: 0;
    margin: 0
}

h2 {
    padding: 0;
    padding-top: 5vh;
    margin: 0;
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    color: #EACF98;
}

h3 {
    padding: 0;
    margin: 0;
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    color: #C4C4C4;
}

p {
    font-family: Muli;
    font-style: lighter;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 30px;
    color: #FFFFFF;
}

.left {
    max-width: 80%;
    margin: auto auto;
    margin-right: 12%;
}

.right {
    padding: 0;
    margin: 0;
}

.divider {
  padding: 20px 0;
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

button {
  display: none;
  margin: 40px auto;
  padding: 20px;
  border: #FFF;
  background-color: rgba(0,0,0,.0);
  border: 3px solid white;
  border-radius: 5px
}

@media only screen and (max-width: 1450px) {
  .container {
      flex-direction: column;
      width: 100%;
      height: 100%;
  }
  .left {
      text-align: center;
      font-size: 1.5rem;
  }
  .right {
      width: 100%;
  }



  button { 
    display: flex;
    }
}

</style>