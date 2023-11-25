"use client"
import { useEffect } from "react"
import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';



export default function Intro(){

    // useEffect(()=>{

    //     const canvas = document.getElementById('canvas3d');
    //     const app = new Application(canvas);
    //     app.load('https://prod.spline.design/g9EXU7thoEwzsubH/scene.splinecode');

    // },[])
    return (
        <main className="h-[100vh] w-full">
            {/* <canvas id="canvas3d" ></canvas> */}

        <Spline scene="https://prod.spline.design/qBMPeZGEJdi-0Jjg/scene.splinecode" />

        </main>

    )
}