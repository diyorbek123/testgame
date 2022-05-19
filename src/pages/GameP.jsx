import React, { useState } from 'react'

const Game = () => {
    const [state, setState] = useState(true)
    const [sanoq, setSanoq] = useState(1)
    var wrapper = document.querySelector(".wrapper")
    var btn = document.getElementById("btn")
    var yutdingiz = document.getElementById("natija");
    var squares = document.querySelectorAll(".square")

    const tekshir = (e) => {
        setSanoq(sanoq * 1 + 1)
        if (state !== true) {
            setState(true);
            let x = document.getElementById(e);
            x.innerText = "X";
            x.classList = "square white"
            x.disabled = "true";
            
        } else {
            setState(false);
            let o = document.getElementById(e);
            o.innerText = "O";
            o.classList = "square yellow"
            o.disabled = "true";
        }
    };

    const yutuq = () => {
        var bir = document.getElementById("bir");
        var ikki = document.getElementById("ikki");
        var uch = document.getElementById("uch");
        var turt = document.getElementById("turt");
        var besh = document.getElementById("besh");
        var olti = document.getElementById("olti");
        var yetti = document.getElementById("yetti");
        var sakkiz = document.getElementById("sakkiz");
        var tuqqiz = document.getElementById("tuqqiz");
        if (((bir.innerText === "X" && ikki.innerText === "X" && uch.innerText === "X") ||
            (bir.innerText === "O" && ikki.innerText === "O" && uch.innerText === "O")) ||
            ((bir.innerText === "X" && turt.innerText === "X" && yetti.innerText === "X") ||
                (bir.innerText === "O" && turt.innerText === "O" && yetti.innerText === "O")) ||
            ((bir.innerText === "X" && besh.innerText === "X" && tuqqiz.innerText === "X") ||
                (bir.innerText === "O" && besh.innerText === "O" && tuqqiz.innerText === "O")) ||
            ((tuqqiz.innerText === "X" && olti.innerText === "X" && uch.innerText === "X") ||
                (tuqqiz.innerText === "O" && olti.innerText === "O" && uch.innerText === "O")) ||
            ((yetti.innerText === "X" && besh.innerText === "X" && uch.innerText === "X") ||
                (yetti.innerText === "O" && besh.innerText === "O" && uch.innerText === "O")) ||
            ((yetti.innerText === "X" && sakkiz.innerText === "X" && tuqqiz.innerText === "X") ||
                (yetti.innerText === "O" && sakkiz.innerText === "O" && tuqqiz.innerText === "O")) ||
            ((ikki.innerText === "X" && besh.innerText === "X" && sakkiz.innerText === "X") ||
                (ikki.innerText === "O" && besh.innerText === "O" && sakkiz.innerText === "O")) ||
            ((turt.innerText === "X" && besh.innerText === "X" && olti.innerText === "X") ||
                (turt.innerText === "O" && besh.innerText === "O" && olti.innerText === "O"))) {
            yutdingiz.innerText = "Siz o'yinda yutdingiz !!!";
            yutdingiz.style.display = "block"
            btn.style.display = "block"
            wrapper.style.display = "none";
            setSanoq(1);
            setState(true);
        }
    };

    const durang = () => {
        switch (sanoq) {
            case 9:
                yutdingiz.innerText = "Durang !!!";
                yutdingiz.style.display = "block"
                btn.style.display = "block"
                wrapper.style.display = "none"
                setSanoq(1)
                setState(true)
                break;
        }
    }

    const bosing = (e) => {
        switch (e) {
            case "bir":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "ikki":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "uch":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "turt":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "besh":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "olti":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "yetti":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "sakkiz":
                tekshir(e);
                durang();
                yutuq();
                break;
            case "tuqqiz":
                tekshir(e);
                durang();
                yutuq();
                break;

            default:
                console.log(0);
                break;
        }
    };

    const tozalash = () => {
        for (var i = 0; i < squares.length; i++) {
            squares[i].innerText = ""
            squares[i].disabled=false
        }
    }

    const yangilash = () => {
        yutdingiz.style.display = "none";
        btn.style.display = "none";
        wrapper.style.display = "grid";
        tozalash();
    }

    return (
        <div className="container">
            <h1 id="natija"> Siz o'yinda yutdingiz !!!</h1>
            <div className="wrapper">
                <button className="square" id="bir" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="ikki" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="uch" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="turt" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="besh" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="olti" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="yetti" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="sakkiz" onClick={(e) => bosing(e.target.id)}></button>
                <button className="square" id="tuqqiz" onClick={(e) => bosing(e.target.id)}></button>
            </div>
            <button id="btn" onClick={yangilash}>Qaytadan boshlash</button>
        </div>
    )
}

export default Game