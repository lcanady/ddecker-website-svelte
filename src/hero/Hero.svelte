<script>
    import Navbar from '../navbar/Navbar.svelte';
    import Form from './form.svelte'
</script>

<div class="wrapper">
    <div class="overlay">
        <Navbar />
        <div class="container">
            <div class="left">
                <h2>Mindful and Calming</h2>
                <h1>IT Consultation & Servicing</h1>
                <h3>In A Chaotic Techincal World</h3>
                <hr />
                <p>There needs to be a change in the way people feel about the technical world and the various connected services they use in their daily and professional lives. We believe that our customer's technical needs can be addressed in a calm, mindful and skillful way. With a combined 40 years of experience, there’s no problem too big (or small).</p>
            </div>
            <div class="right">
                <div class="form">
                    <Form />
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
    width: 95%;
    
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
    max-width: 90%;
    margin: auto 0 auto 0;
    margin-right: 22%;
}

hr {
    margin: 30px 0 30px 0;
    margin-right: 600px;
    border: 10px solid rgba(234, 207, 152, 0.3);
}
</style>