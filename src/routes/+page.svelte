<script>
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Certificates from "$lib/components/Certificates.svelte";
    import Studies from "$lib/components/Studies.svelte";
    import Contact from "$lib/components/Contact.svelte";

    // ========= PRELOAD DE ICONOS =========
    import html from "$lib/icons/html.svg";
    import css from "$lib/icons/css.svg";
    import js from "$lib/icons/js.svg";
    import ts from "$lib/icons/ts.svg";
    import vue from "$lib/icons/vue.svg";
    import svelteIcon from "$lib/icons/svelte.svg";
    import react from "$lib/icons/react.svg";
    import angular from "$lib/icons/angular.svg";

    import java from "$lib/icons/java.svg";
    import spring from "$lib/icons/spring.svg";
    import node from "$lib/icons/node.svg";
    import python from "$lib/icons/python.svg";

    import postgres from "$lib/icons/postgres.svg";
    import mysql from "$lib/icons/mysql.svg";
    import mongodb from "$lib/icons/mongodb.svg";

    import git from "$lib/icons/git.svg";
    import github from "$lib/icons/github.svg";
    import docker from "$lib/icons/docker.svg";

    // No los usas aquí, pero los importas => precarga lista
</script>

<Hero />
<About />
<Projects />
<Certificates />
<Studies />
<Contact />
