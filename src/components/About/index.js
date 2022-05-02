import { images } from "../../assets/images"
import { deviceType } from "../../utils/metrics"
import { AboutSection } from "../AboutSection"
import { Spacer } from "../Spacer"
import "./style.css"

export function About() {
    return (
        <div id="about" style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: deviceType() !== 'desktop' ? '90%' : 1200,
            }}>
                <div style={{
                    display: deviceType() !== 'desktop' ? 'block' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <h1 style={{
                            fontFamily: 'MPlus-Black',
                            fontSize: 35,
                            margin: 0,
                        }}>About Us</h1>
                        <p style={{
                            margin: 0,
                            color: '#E9204F'
                        }}>We're More Than A Tech Firm</p>
                    </div>

                    <p style={{
                        fontFamily: 'MPlus-Medium',
                        fontSize: 20,
                        display: 'inline-block',
                        width: deviceType() !== 'desktop' ? 'unset' : '60%'
                    }}><span style={{
                        color: '#E9204F',
                        fontFamily: 'MPlus-Bold'
                    }}>Chenius Solutions</span> is a leading digital solution company that offers ERP Solutions, Mobile Applications and IT Supports to corporate and SMEs. We not only offer business solutions that is functional, but we are also dedicated to build the most effective and coolest digital solution. We work with heart and accountability to focus on our clients’ benefit and social responsibility.</p>
                </div>
                <Spacer height={40} />
                <div style={{
                    display: deviceType() !== 'desktop' ? 'block' : 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}>
                    <AboutSection image={images.about1} title={"Who We Are"} body="Chenius Solution was founded under co-founders’ vision as seeing the great opportunities in the new technology world. With a clear vision, what we do is to bring out creative and innovative digital solutions to our clients which help to grow their business dramatically. " />
                    <Spacer width={40} />
                    <AboutSection image={images.about2} title={"What We Do"} body="We not only offer business solutions that is functional, but we are also dedicated to build the most effective and coolest digital solution. We work with heart and accountability to focus on our clients’ benefit and social responsibility." />
                    <Spacer width={40} />
                    <AboutSection image={images.about3} title={"Our Philosophy"} body="Inspire our team to dream more, learn more and do more. Satisfy our clients with the best match to their needs. Trust everyone can bring a better change and growth together." />
                </div>
            </div>
        </div>
    )
}