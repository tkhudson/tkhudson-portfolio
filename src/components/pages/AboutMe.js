import React from "react";
import Menu from "../menu";
import Footer from "../footer";

function aboutMe () {
    return (
        <div>
            <Menu />
            <h1>About Me</h1>
            <p>
                I am a software developer with a passion for creating innovative solutions that solve real-world problems.
                I have experience in a variety of programming languages and technologies, and I am always looking for new
                challenges to tackle.
            </p>
            <p>
                In my free time, I enjoy reading, hiking, and spending time with my family. I am also an avid learner and
                enjoy staying up-to-date with the latest trends in technology.
            </p>
            <Footer />
        </div>
    );
}

return aboutMe;