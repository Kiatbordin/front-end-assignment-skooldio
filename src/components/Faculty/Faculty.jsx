import React from "react";
import "./Faculty.css";

export function Faculty(props) {

    return (
        <div className="Faculty">
            <div className="card-header">
                <img className="faculty-image" src={props.faculty.logo} alt={props.faculty.name} />
                <div className="faculty-container">
                    <h1>{props.faculty.faculty.name}</h1>
                    <h2>{props.faculty.name}</h2>
                    <h2>{props.faculty.faculty.university.name}</h2>
                </div>
                <img className="heart" src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="heart-icon" />
            </div>
            <div className="card-information">
                <div className="round-container">
                    <div className="round-number-container">
                        <h2 className="open-round">รอบที่เปิด</h2>
                        {props.faculty.roundSeats.map( (round,idx)=> <h2 className="round-num" key={"round-"+idx}>{idx+1}</h2>)}
                    </div>
                    <div className="round-container-2">
                        
                        <h2 className="round-header">รอบที่ 4 : 
                            <span> { props.faculty.score && props.faculty.score.scoreType } </span> 
                            <span> { !props.faculty.score && "-" } </span> 
                        </h2>

                        <h2 className="edit-score-box">แก้ไขคะแนน</h2>
                    </div>
                </div>
                <div className="score-container">

                    <div className="score-summary-box">
                        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" alt="badge" />
                        <div className="total-score-box">
                            <h3>คะแนนของคุณคือ</h3>
                            <h1>23,453</h1>
                        </div>
                    </div>

                    <div className="min-avg-max-score-container">
                        <div className="min-box">
                            <h2>{ !props.faculty.score && "-" }</h2>
                            <h2>{ props.faculty.score && props.faculty.score.min }</h2>
                            <h3>คะแนนต่ำสุด 60</h3>
                        </div>
                        <div className="avg-box">
                            <h2>{ !props.faculty.score && "-" }</h2>
                            <h2>{ props.faculty.score && props.faculty.score.avg }</h2>
                            <h3>คะแนนต่ำสุด 60</h3>
                        </div>
                        <div className="max-box">
                            <h2>{ !props.faculty.score && "-" }</h2>
                            <h2>{ props.faculty.score && props.faculty.score.max }</h2>
                            <h3>คะแนนต่ำสุด 60</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}