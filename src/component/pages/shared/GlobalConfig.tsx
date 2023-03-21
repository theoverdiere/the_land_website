import { PageName } from "../main/parallax/config/ParallaxConfig";

export enum RouteConfig {
    portalPage = '/the_land_website',
    mainPage = '/the_land_website/the-tales'
}

export enum LinkConfig {
    instagram = "https://www.instagram.com/the_land_stands/",
    spotify = "https://open.spotify.com/track/4kgHfnWMk3rK5upoZgJrFr",
    youtube = "https://www.youtube.com/watch?v=zLhoDB-ORLQ"
}

export const AudioMap = new Map<PageName, HTMLAudioElement>();
AudioMap.set(PageName.neverCatch, new Audio("https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"));
AudioMap.set(PageName.fire, new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"));
AudioMap.set(PageName.cloudFalls, new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"));
AudioMap.set(PageName.flowerDust, new Audio("https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg"));
