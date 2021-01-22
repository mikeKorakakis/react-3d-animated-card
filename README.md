# @mikekorakakis/react-3d-animated-card

This is a fork from @sl-codeblaster/react-3d-animated-card.
It uses ids instead of classes to identify the elements so that it can work with server-side-rendering.
> 3D Animated card component for ReactJs.

[![NPM](https://img.shields.io/npm/v/@sl-codeblaster/react-3d-animated-card.svg)](https://www.npmjs.com/package/@sl-codeblaster/react-3d-animated-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

with npm
```bash
npm install --save @mikekorakakis/react-3d-animated-card
```

with yarn
```bash
yarn add @mikekorakakis/react-3d-animated-card
```
You should need to import css file to your css file.

`@import "@mikekorakakis/react-3d-animated-card/dist/index.css";`


![alt text](https://github.com/SL-CodeBlaster/react-3d-animated-card/blob/main/Screenshot.jpg?raw=true)

##Usage
```
<AnimatedCard
    config={{
        rotation: 15, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
        transition:{
            duration:0.5,
            timingMode: "ease"
        },
        transform:{
            figureIcon: {
                rotation: 20,
                translateZ: 160
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
        }
    }}
    style={{
        width:560 //container style (you can use className as well)
    }}
>

    <div className="card" id="card_3d">
        <div className="figure" id="figure_3d">
            <div className="figure_bg" id="figure_bg_3d"/> // not required, just used for design
            <img src={require('./images/image.png').default} alt=""/>
        </div>
        <div className="content" id="content_3d">
            <h2 className="title" id="title_3d">Animated Card</h2>
            <p className={"body"} id="body_3d">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry</p>
        </div>
        <div className="footer"  id="footer_3d">
            <button className={"footer_btn"} id="footer_btn_3d">BUTTON</button>
        </div>
    </div>

</AnimatedCard>
```

##Configuration
use `config` prop to pass configuration object to the component.

| Property      | Value         |
| ------------- |:--------------|
| rotation      | number        |
| transition    | object        |
| transform     | object        |
| style         | react default style object |
| className     | string        |

`transition` object

| Property      | Value         |
| ------------- |:--------------|
| duration      | number        |
| timingMode    | `'ease','ease-out','ease-in','ease-in-out'` use one of these|

`transform` object

| Property              | Value         |
| -------------         |:--------------|
| figureIcon            | object        |
| titleTranslateZ       | number        |
| bodyTextTranslateZ    | number        |
| buttonTranslateZ      | number        |

`figureIcon` object

| Property     | Value         |
| -------------|:--------------|
| rotation     | number        |
| translateZ   | number        |

