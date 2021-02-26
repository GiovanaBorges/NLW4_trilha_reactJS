import styles from '../styles/components/ExperienceBar.module.css';
import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContexts';


export function ExperienceBar (){

    const {currentExperience , ExperienceNextLevel} = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / ExperienceNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width : `${percentToNextLevel}%`}} /> 

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience}px
                </span>
            </div>
            <span>{ExperienceNextLevel} xp</span>
        </header>
    );
}