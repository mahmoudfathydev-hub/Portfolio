import edusection from "../../../images/edusection.png"
import "./ThirdSection.scss"

export default function ThirdSection() {



    return (
        <div className="third-section">
            <div className="container">
                <div className="img-section">
                    <img src={edusection} alt="education" />
                </div>
                <div className="text-section">
                    <p>
                        I have always been a dedicated and high-achieving student.
                        During primary school, I consistently ranked among the <span>top three</span>.
                        In preparatory school, I scored <span>97.9%</span>, ranking <span>5th</span> in my school and <span>7th</span> in the educational district.
                        In high school, I studied in the <span>Science-Mathematics</span> section, achieving <span>76.1%</span>.
                        Throughout my education, I received <span>38 academic certificates</span> recognizing my excellence.
                    </p>
                </div>
            </div>
        </div>
    )
}
