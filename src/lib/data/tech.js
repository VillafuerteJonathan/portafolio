// ICONOS DESDE LIB ASSETS
import html from "$lib/assets/icons/html.svg";
import css from "$lib/assets/icons/css.svg";
import bootstrap from "$lib/assets/icons/bootstrap.svg";
import js from "$lib/assets/icons/js.svg";
import svelte from "$lib/assets/icons/svelte.svg";
import react from "$lib/assets/icons/react.svg";
import reactnative from "$lib/assets/icons/reactnative.svg";
import angular from "$lib/assets/icons/angular.svg";

import node from "$lib/assets/icons/node.svg";
import express from "$lib/assets/icons/express.svg";
import nestjs from "$lib/assets/icons/nestjs.svg";
import nextjs from "$lib/assets/icons/nextjs.svg";
import php from "$lib/assets/icons/php.svg";
import java from "$lib/assets/icons/java.svg";

import mysql from "$lib/assets/icons/mysql.svg";
import postgresql from "$lib/assets/icons/postgresql.svg";
import sqlserver from "$lib/assets/icons/sqlserver.svg";
import mongo from "$lib/assets/icons/mongo.svg";

import git from "$lib/assets/icons/git.svg"; 
import github from "$lib/assets/icons/github.svg";
import docker from "$lib/assets/icons/docker.svg";
import postman from "$lib/assets/icons/postman.svg";
import xampp from "$lib/assets/icons/xampp.svg";

import powerbi from "$lib/assets/icons/powerbi.svg";
import visualstudio from "$lib/assets/icons/visualstudio.svg";
import netbeans from "$lib/assets/icons/netbeans.svg";
import androidstudio from "$lib/assets/icons/androidstudio.svg";

export const TECH = {
    frontend: [
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "Bootstrap", icon: bootstrap },
        { name: "JavaScript", icon: js },
        { name: "Svelte", icon: svelte },
        { name: "React", icon: react },
        { name: "React Native", icon: reactnative },
        { name: "Angular", icon: angular }
    ],

    backend: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "NestJS", icon: nestjs },
        { name: "Next.js", icon: nextjs },
        { name: "PHP", icon: php },
        { name: "Java", icon: java }
    ],

    database: [
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgresql },
        { name: "SQL Server", icon: sqlserver },
        { name: "MongoDB", icon: mongo }
    ],

    devops: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Docker", icon: docker },
        { name: "Postman", icon: postman },
        { name: "XAMPP", icon: xampp }
    ],

    tools: [
        { name: "Power BI", icon: powerbi },
        { name: "Visual Studio", icon: visualstudio },
        { name: "NetBeans", icon: netbeans },
        { name: "Android Studio", icon: androidstudio }
    ]
};