
import {
    ArrowDown,
    ArrowUpRight,
    Download
} from 'lucide-react';

import { profile } from '../data/portfolio';

export default function Hero() {
    return (
        <section id="home" className="hero section-shell">

            {/* LEFT SIDE - INTRODUCTION */}

            <div className="hero-copy">

                <span className="availability">
                    <i />
                    OPEN TO DATA & BI OPPORTUNITIES
                </span>

                <p className="hero-kicker">
                    HELLO, I'M {profile.name.toUpperCase()}
                </p>

                <h1>
                    Making data
                    <br />
                    <em>meaningful.</em>
                </h1>

                <p className="hero-description">
                    {profile.summary} I work across business
                    intelligence, data preparation and analytics
                    to make information easier to understand
                    and act on.
                </p>

                {/* ACTION BUTTONS */}

                <div className="hero-actions">

                    <a
                        className="button button-primary"
                        href="#projects"
                    >
                        Explore projects
                        <ArrowUpRight size={17} />
                    </a>

                    <a
                        className="button button-secondary"
                        href="/Srividhya_Saravanan.pdf"
                        download
                    >
                        Download resume
                        <Download size={16} />
                    </a>

                </div>

                {/* SKILLS FOOTNOTE */}

                <div className="hero-footnote">

                    <span>POWER BI</span>
                    <i />

                    <span>SQL</span>
                    <i />

                    <span>PYTHON</span>
                    <i />

                    <span>DATA MODELLING</span>

                </div>

            </div>


            {/* RIGHT SIDE - PROFESSIONAL PORTRAIT */}

            <div className="hero-art portrait-art">

                <div className="portrait-circle">

                    <img
                        src="/images/profile.png"
                        alt="Srividhya - Data Analyst"
                        className="profile-image"
                    />

                </div>

                {/* OVERLAPPING EDITORIAL TEXT */}

                <div className="portrait-caption">
                    DATA
                    <br />
                    ANALYST
                </div>

                {/* FLOATING LABEL */}

                <div className="portrait-tag">

                    <span />

                    BUSINESS INTELLIGENCE

                </div>

            </div>


            {/* SCROLL INDICATOR */}

            <a
                className="scroll-cue"
                href="#about"
            >

                <span>SCROLL TO EXPLORE</span>

                <ArrowDown size={15} />

            </a>

        </section>
    );
}
