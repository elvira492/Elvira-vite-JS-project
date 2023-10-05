export const PageHome = () => {
	return /*html*/`
<div class="page pageHome">
   
</div>
<style>
    header {
        height:100%;
    }
    footer {
        display: none;
    }
    .page {
       display:none;
    }
    #video {
        height:100%;
    }
    #icon-arrow {
        display:none;
    }
    .hero-text {
        margin:15vh 0 0 0;
        font-size:small;
        opacity: 0.9;
    }
    @media screen and (min-width: 768px){
        .hero-text {
        margin:25vh 0 0 0;
        font-size:xx-large;
        opacity: 0.9;
    } 
    #header-responsive2  {
        border-bottom:1px rgb(255, 255, 255, 0.15) solid;
    }
    }
</style>
`;
}