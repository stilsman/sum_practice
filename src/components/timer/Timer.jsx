import "../../styles/Main.module.css";
import styles from "./Timer.module.css";

import alarmSound from "../../sounds/zvonok.mp3";

import React, { useEffect, useState } from "react";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const audioFile = new Audio(alarmSound);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
        audioFile.pause();
        audioFile.currentTime = 0;
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
        document.body.style.backgroundColor = "#151925";
        audioFile.pause();
        audioFile.currentTime = 0;
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        document.body.style.backgroundColor = "#681c23";
                        audioFile.play();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('timerState', JSON.stringify({ minutes, seconds }));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [minutes, seconds]);

    useEffect(() => {
        const savedTimerState = localStorage.getItem('timerState');

        if (savedTimerState) {
            const { minutes: savedMinutes, seconds: savedSeconds } = JSON.parse(savedTimerState);
            setMinutes(savedMinutes);
            setSeconds(savedSeconds);
        }
    }, []);

    const handleMinutesChange = (event) => {
        if (!isActive) {
            setMinutes(parseInt(event.target.value));
        }
    };
    const handleSecondsChange = (event) => {
        if (!isActive) {
            setSeconds(parseInt(event.target.value));
        }
    };

    return (
        <section className={styles.timer}>
            <div className={styles.timer__block}>
                <div className={styles.timer__container}>
                    <div className={styles.timer__title}>
                        <span>
                            Timer
                        </span>
                    </div>
                    <div>
                        <div className={styles.timer__inner_container}>
                            <div className={styles.timer__input}>
                                <input
                                    type="number"
                                    value={minutes}
                                    onChange={handleMinutesChange}
                                    disabled={isActive}
                                    min="0"
                                />
                                <span className={styles.timer__words}>minutes</span>
                            </div>
                            <div className={styles.timer__input}>
                                <input
                                    type="number"
                                    value={seconds}
                                    onChange={handleSecondsChange}
                                    disabled={isActive}
                                    min="0"
                                    max="59"
                                />
                                <span className={styles.timer__words}>seconds</span>
                            </div>
                            <div className={styles.timer__btns}>
                                <button onClick={startTimer} className={isActive ? styles.timer__button_inActive : styles.timer__button_active}>
                                    Start
                                </button>
                                <button className={ isActive ? styles.timer__button_active : styles.timer__button_inActive} onClick={stopTimer}>
                                    Stop
                                </button>
                                <button className={styles.timer__button_active} onClick={resetTimer}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Timer;