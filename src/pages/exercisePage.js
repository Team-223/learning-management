import React from "react";
import Header from "../components/header/Header";
import "./exercisePage.css";

function ExercisePage() {
    return(
        <div className="main__cntr">
            <Header />
            <div className="inner__main__cntr">
                <div className="exercise__cntr">
                    <div className="outer__ex__cntr">
                        <span>Exercise 1</span>
                        <div className="inner__ex__cntr">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis. Urna porttitor rhoncus dolor purus non enim praesent elementum. Integer quis auctor elit sed vulputate mi sit amet. Tristique nulla aliquet enim tortor at auctor urna.
                            <br />
                            <br/>
                            Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Facilisi nullam vehicula ipsum a arcu. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Laoreet suspendisse interdum consectetur libero id. Lacus vestibulum sed arcu non odio euismod lacinia at. Ac felis donec et odio pellentesque.
                            <br />
                            <br />
                            Neque gravida in fermentum et sollicitudin ac orci phasellus. Quam pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh.</span>
                            <div className="btn test">
                                <span>Test Code</span>
                            </div>
                            <div className="btn submit">
                                <span>Submit Code</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="code__cntr">
                    <div className="code__editor">
                        <textarea></textarea>
                    </div>
                    <div className="code__text"></div>
                </div>
            </div>
        </div>
    )
};

export default ExercisePage;