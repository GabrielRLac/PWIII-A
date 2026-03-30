import hotgirls from "../assets/Cynthia.jpg"
import hotguys from "../assets/Heracles.jpg"

export default function About() {
    return (
        <div>
            <h1>Sobre</h1>
            <p>
                Mulheres e Homens Goxtosos
            </p>
            <img src={hotguys} alt="Hot Guys" />
            <img src={hotgirls} alt="Hot Girls" />
        </div>
    )
}