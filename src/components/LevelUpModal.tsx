import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';


export function LevelUpModal(){
    const {level ,closeLevelUpModal } = useContext(ChallengesContext);
    return(
        <div className={styles.overlay}>
            <div className={styles.LevelUpModalContainer}>
                <header>{level}</header>

                <strong>Parabéns </strong>
                <p>voçê alcançou um novo nível.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="icone fechar modal" />
                </button>
            </div>
        </div>
    );
}