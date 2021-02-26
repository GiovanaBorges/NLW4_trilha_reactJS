import styles from '../styles/components/Profile.module.css';
import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

export function Profile() {
const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt=" icone usuario"/>
        
            <div>
            <strong>Jamilo dos santos humilde costas pereira stronga</strong>
            <p>
                <img src="icons/level.svg" alt="icon level"/>
               Level {level}
               
               </p>
            </div>
        
        </div>
    );
}
