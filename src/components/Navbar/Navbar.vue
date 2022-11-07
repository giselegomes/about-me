<template>
	<nav class="navbar">
        <ul class="navbar__menu">
            <li>    
                <a href="/about-me">Sobre mim</a>
            </li>
            <li>    
                <a href="/skills">Skills</a>
            </li>
            <li>    
                <a href="/projects">Projetos</a>
            </li>
        </ul>
        <div class="navbar__switch">
            <input id="switch" class="switch navbar__switch--shadow" type="checkbox" />
            <label for="switch"></label>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import './style.scss' 
</style>