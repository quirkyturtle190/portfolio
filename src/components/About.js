import "./About.css";
import NavBar from "./NavBar";
export default function About(props){
    return (
        <div>
            < NavBar/>
            <div className="about-container">
                <div className="about-img">
                    <img className="big-ben" src="/portfolio/big-ben.png" alt="Big Ben"/>
                </div>
                <div className="about-info">
                   <h1 className="about-header">Hey! I am Anon</h1>
                    <p className="about-text">I am a software engineer with a passion for developing new and innovative technology. I'm currently studying
                    Computer Science at Brown University in Providence, Rhode Island. I was born and raised in east Tennessee. </p>

                    <p className="about-text"> I have always had a love for Computers and I got my first Desktop Computer when I was six years old. I very quickly
                    became excited by the potential of computers and the software that was on it. Although at that time, it was mostly a love for flash games.
                    Throughout the years, I became more and more interested in software, but I didn't know what made it work. I didn't discover coding until I was
                    in high school, but as soon as I learned about it, I knew it was what I wanted to do. I devoured free courses online and began learning to code. I started with a
                    simple hello world, but I had remade part of my favorite child hood game, Pokemon, by the time I graduated high school in 2020 </p>

                    <p className="about-text"> This past summer I worked at Cisco as a cloud networking intern where I developed server metrics using Grafana and created APIs in Golang.
                    This upcoming summer I will be developing internal tools for Microsoft as a software engineering intern</p>

                    <p className="about-text"> I took a user interface and design class this fall at Brown, so I designed and developed this website from scratch using all
                    the knowledge I learned from the class with no prior background in frontend design</p>

                    <p className="about-text"> When I am not coding, you can find me traveling the world taking pictures along the way</p>
                </div>
            </div>
        </div>
    );
}