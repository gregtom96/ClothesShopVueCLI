<template>
    <div class="side_menu">
        <nav>
            <a href="#" class="menu-link">Contact</a>
            <a href="#" class="menu-link">Instagram</a>
        </nav>
        <button aria-label="toggle curtain navigation" class="nav-toggler">
            <span class="line l1"></span>
            <span class="line l2"></span>
            <span class="line l3"></span>
        </button>
    </div>
</template>

<script>
export default{
    name:'SideMenuComponent',
    mounted(){
        const hamburgerButton = document.querySelector(".nav-toggler")
        const navigation = document.querySelector(".side_menu nav")

        hamburgerButton.addEventListener("click", ()=>{
            hamburgerButton.classList.toggle("active")
            navigation.classList.toggle("active")
        })
    }
}
</script>

<style scoped>
*, ::before, ::after{
    box-sizing: border-box;
}
.nav-toggler{
    position: fixed;
    z-index: 3;
    top: 15px;
    height: 30px;
    width: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}
.line{
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    transition: transform 0.3s ease-out, opacity 0.1s ease-out;
}
.l1{
    transform: translateY(-10px);
}
.l3{
    transform: translateY(10px);
}
.nav-toggler.active .l1{
    transform: translateY(0px) rotate(135deg);
}
.nav-toggler.active .l2 {
    opacity: 0;
}
.nav-toggler.active .l3{
    transform: translateY(0px) rotate(-135deg);
}
.side_menu nav{
    position: fixed;
    z-index: 3;
    width: 25%;
    height: 100vh; /* Change 100vw to 100vh */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.73, 0.11, 0.67, 0.84);
}
.side_menu nav.active{
    transform: translate(0);
}
.side_menu .menu-link{ /* Change 'nav a' to '.side_menu .menu-link' */
    font-family: Quicksand, sans-serif;
    color: white;
    font-size: 20px;
    display: block;
    margin: 10px 0;
    text-decoration: none;
}

@media screen and (max-width: 1000px){
    .side_menu nav{
        width: 50%;
    }
}
</style>
