import React from 'react'
import { skills } from '../../data'

const Skills = () => {
    const frontSkills = skills.filter(type => type.equals("FRONT"));
    const backSkills = skills.filter(type => type.equals("BACK"));
  
    return (
      <section id="experiences">
          <h5>What Are My Skills</h5>
          <h2>My Experiences</h2>
          <div className="container experiences__container">
              <div className="experiences__front">
                    {
                        frontSkills.map(({ type, skill, pourcentage }) => {
                            return (<div className="experiences__content">
                                <h4>{skill}</h4>
                            </div>)
                        })
                    }
                </div>
              <div className="experiences__front">
                    {
                        frontSkills.map(({ type, skill, pourcentage }) => {
                            return (<div className="experiences__content">
                                <h4>{skill}</h4>
                            </div>)
                        })
                    }
                    </div>
          </div>
    </section>
  )
}

export default Skills