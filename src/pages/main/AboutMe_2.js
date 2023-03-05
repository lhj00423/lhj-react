import React from 'react';
import './AboutMe_2.css';

const AboutMe_2 = () => {
    return (
        <div id="aboutme">
            <div id="content-box">
                <h2 className='titeng'>
                    ABOUT ME
                </h2>
                <div id="abt-wrap"> 
                    <div id="edu">
                        <h3>EDUCATION</h3>
                            <ul>
                                <li>
                                    <em>그린컴퓨터아카데미 프론트엔드 개발 취업 교육 수료</em>
                                    <p>iot 융합 javascript기반 소프트웨어 엔지니어 개발자(프론트 엔드) 양성과정</p><br/>
                                    <span>2022.10 - 2023.03</span>
                                </li>
                                <li>
                                    <em>부산가톨릭대학교</em>
                                    <p>노인복지학과 </p><br/>
                                    <span>커뮤니케이션 능력 습득, 협업시에 활용</span><br/>
                                    <span>2015.10 - 2020.03</span>
                                </li>
                            </ul>
                        </div>
                        <div className='skill'>
                            <h3>POSSIBLE SKILL</h3>
                            <ul>
                                <li>
                                    <em>HTML5 / CSS3 / JavaScript</em>
                                    <span>프론트엔드개발 언어를 이용한 UI개발, 웹 접근성을 고려한 마크업 경험</span>
                                </li>
                                <li>
                                    <em>React.js / TypeScript</em>
                                    <span>리액트를 활용한 컴포넌트 작성 경험 및 프로젝트 사이트 제작경험</span>
                                </li>
                                <li>
                                    <em>PHP / MYSQL / PYTHON</em>
                                    <span>웹 애플리케이션의 서버나 데이트베이스를 관리하는 기술 활동 경험</span>
                                </li>
                            </ul>
                        </div>
                    <div id="addskill">
                        <h3>ADD SKILL</h3>
                            <ul>
                                <li>
                                    <em>정보처리기능사</em>
                                    <span>2023.02 필기 합격, 실기 응시예정</span>
                                </li>
                                <li>
                                    <em>Illustration / Adobe XD</em>
                                    <span>마크 및 사이트 제작 로고 제작 경험</span>
                                </li>
                                <li>
                                    <em>라즈베리파이</em>
                                    <span>PYTHON을 응용하여 전기회로 구조 및 기초이해를 실습을 통해 경험 및 학습</span>
                                </li>
                            </ul>
                    </div>
                        <section className= "swing">
                            <span className='more-btn'>SEE MORE</span>
                        </section>   
                </div>
            </div>
        </div>
    );
};

export default AboutMe_2;