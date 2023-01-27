
import React from 'react';
import styles from "./MainBlock.module.css";

const MainBlock = () => (
    <div className={styles.main}>
        
        <h3>О ресурсе</h3>
        <p>
            Привет! Я front-end инженер. В этом блоге я собрал все свои статьи на различные темы.
            Основные разделы этого блога:
        </p>

        <ul>
            <li>Front-end architecture - различные архитектурные приемы для front-end</li>
            <li>100 Questions - сборник небольших вопросов для продвинутого пользователя или начинающего программиста</li>
        </ul>

        <p>
            Если у вас есть работа для меня, вопрос или просто интересная тема для обсуждения
            - обращайтесь по адресу victorveretennikov58@gmail.com! 
        </p> 

        <p>
            С уважением, Веретенников Виктор!
        </p>
    </div>
);

export default MainBlock;