import "./ProjectCard.css";
export default function ProjectCard(props){
    return (
        <div class="items">
            <a href={props.info.link}><img src={props.info.image} alt={props.info.name}/></a>
            <h1>{props.info.name}</h1>
            <p>{props.info.description}</p>
        </div>
    );
}