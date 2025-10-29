import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    Ejs,
    Nodejs,
    express,
    mongoDB,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    Java
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <img src={html} title="html" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={css} title="CSS" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={js} title="JavaScript" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={react} title="React" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>React</p>
        </div>
        {/* <img src={redux} title="Redux" alt="" /> */}
        <div className="flex flex-col items-center">
          <img src={tailwind} title="Tailwind CSS" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={bootstrap} title="Bootstrap" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Bootstrap</p>
        </div>
        {/* <img src={sass} title="SASS" alt="" /> */}
        <div className="flex flex-col items-center">
          <img src={Ejs} title="Ejs" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>EJS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={express} title="Express" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Express</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Java} title="Java" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Java</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Nodejs} title="NodeJs" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Node.js</p>
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <img src={vscode} title="Visual Studio Code" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>VS Code</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={git} title="Git" alt="Git" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Git</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={github} title="Github" alt="Github" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={figma} title="Figma" alt="Figma" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Figma</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={npm} title="NPM" alt="NPM" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>NPM</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={postman} title="Postman" alt="Postman" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>Postman</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={mongoDB} title="mongoDB" alt="" />
          <p className="text-sm mt-2" style={{color: 'rgb(102,102,102)'}}>MongoDB</p>
        </div>
      </section>
    </main>
  );
}

export default Technologies;
