import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#84e359',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;

